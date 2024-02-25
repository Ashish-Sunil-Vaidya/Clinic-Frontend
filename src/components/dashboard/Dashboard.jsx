import { Tab, Tabs, TabList, TabPanel, TabPanels, Box } from "@chakra-ui/react";
import { tabnames, tabcontent } from "./routes";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const chakraCustomButtonTheme = {
    borderRadius: "10px",
    bg: "teal.500",
    color: "white",
  };

  const [orientation, setOrientation] = useState("vertical");
  const [isMobile, setIsMobile] = useState(false);

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
      <Tabs
        variant="soft-rounded"
        colorScheme="teal"
        orientation={orientation}
        w="100%"
        h="100%"
        display={orientation === "horizontal" ? "grid" : "flex"}
        gridTemplateRows="auto 1fr"
        gap={3}
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
              document.body.clientWidth <= 768 && {
                display: "grid",
                gridTemplateColumns: !isMobile
                  ? "repeat(4,1fr)"
                  : "repeat(2,1fr)",
                gridTemplateRows: isMobile && "repeat(2,1fr)",
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

        <TabPanels
          h="100%"
          borderRadius={10}
          overflowY="auto"
        >
          {tabcontent.map((content, index) => (
            <TabPanel key={index} p={0}>{content}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Dashboard;
