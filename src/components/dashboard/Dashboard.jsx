import { Tab, Tabs, TabList, TabPanel, TabPanels, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Summary from "./Summary.section";
import Schedules from "./Schedules.section";
import PatientHistory from "./PatientHistory.section";
import PaymentsHistory from "./PaymentsHistory.section";


const Dashboard = () => {
  const tabnames = ["Home", "Schedules", "Patient History", "Payments History"];

  const tabcontent = [
    <Summary key={1} />,
    <Schedules key={2} />,
    <PatientHistory key={3} />,
    <PaymentsHistory key={4} />,
  ];
  const chakraCustomButtonTheme = {
    bg: "cyan.500",
    color: "white",
    border: "none",
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
          height={{
            sm: "fit-content",
            md: "100%",
            lg: "100%",
            xl: "100%",
          }}
          width={{
            sm: "100%",
            md: "20%",
          }}
          borderRadius={10}
        >
          <TabList
            mt={6}
            minW="fit-content"
            p="10px"
            borderRadius={10}
            gap={3}
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
              <Tab
              position="relative"
              bgColor="white"
              transition="all 300ms"
              top={0}
              left={0}
              boxShadow="5px 5px 8px 2px rgb(0,0,0,.06)"
              _selected={chakraCustomButtonTheme}
                _active={{
                  top: 1,
                  left: 1,
                  boxShadow: "none",
                }}
                key={index}
                
              >
                {tabname}
              </Tab>
            ))}
          </TabList>
        </Box>

        <TabPanels h="100%" overflowY="auto">
          {tabcontent.map((content, index) => (
            <TabPanel key={index} p={0}>
              {content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Dashboard;
