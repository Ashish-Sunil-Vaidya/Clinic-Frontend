import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { tabnames, tabcontent } from "./routes";
import { FaBars } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { FaX } from "react-icons/fa6";

const Dashboard = () => {
  const chakraCustomButtonTheme = {
    borderRadius: "10px",
    bg: "teal.500",
    color: "white",
  };

  const [orientation, setOrientation] = useState("vertical");
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(true);
  const tabRef = useRef(null);

  const handleScroll = () => {
    console.log("===  Dashboard.jsx [34] ==="); 
    if (tabRef.current.scrollTop > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 498) setIsMobile(true);
      else setIsMobile(false);
      if (window.innerWidth > 768) {
        setOrientation("vertical");

        console.log("isMobile", isMobile);
      } else {
        setOrientation("horizontal");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <Tabs
          variant="soft-rounded"
          colorScheme="teal"
          orientation={orientation}
          w="100%"
          h="100%"
        >
          <Box
            boxShadow="0 0 2px 2px rgba(0,0,0,0.05)"
            bg="white"
            height={{
              sm: "fit-content",
              md: "100%",
              lg: "100%",
              xl: "100%",
            }}
            width={{
              sm: "100%",
              md: "30%",
            }}
            borderRadius={10}
          >
            <TabList
              minW="fit-content"
              p="10px"
              borderRadius={10}
              gap={2}
              top={3}
              position="sticky"
              sx={
                document.body.clientWidth > 600 &&
                document.body.clientWidth <= 768 && {
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  width: "100%",
                }
              }
            >
              {tabnames.map((tabname, index) => (
                <Tab _selected={chakraCustomButtonTheme} key={index}>
                  {tabname}
                </Tab>
              ))}
            </TabList>
          </Box>

          <TabPanels>
            {tabcontent.map((content, index) => (
              <TabPanel key={index}>{content}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      ) : (
        <Tabs variant="soft-rounded" px={6} my={6}>
          <Box ref={tabRef} position="sticky" >
            <IconButton
              icon={!show ? <FaBars /> : <FaX />}
              position="absolute"
              boxShadow="0 0 3px 3px rgb(0,0,0,.1)"
              top={-3}
              left={-2}
              color={show ? "red" : "black"}
              onClick={() => setShow(!show)}
              zIndex={99}
            />
            <TabList
              flexDirection="column"
              bg="white"
              boxShadow="0 0 3px 3px rgb(0,0,0,.1)"
              p={3}
              borderRadius={10}
              overflow="hidden"
              sx={!show && { width: "0", height: "0" }}
            >
              {tabnames.map((tabname, index) => (
                <Tab _selected={chakraCustomButtonTheme} key={index}>
                  {tabname}
                </Tab>
              ))}
            </TabList>
          </Box>
          <TabPanels onScroll={handleScroll} >
            {tabcontent.map((content, index) => (
              <TabPanel key={index}  >{content}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};

export default Dashboard;
