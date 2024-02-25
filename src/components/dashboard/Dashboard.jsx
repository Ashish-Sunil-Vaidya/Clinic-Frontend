import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
} from "@chakra-ui/react";
import { tabnames, tabcontent } from "./routes";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const chakraCustomButtonTheme = {
    borderRadius: "10px",
    bg: "teal.500",
    color: "white",
  };

  const [orientation, setOrientation] = useState("vertical");
  useEffect(() => {
    if (document.body.clientWidth > 768) {
      setOrientation("vertical");
    } else {
      setOrientation("horizontal");
    }
  }, [document.body.clientWidth]);

  return (
    <>
      {document.body.clientWidth >= 498 ? (
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
            height="100%"
            width="30%"
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
        <Tabs variant="soft-rounded" px={3}>
          <TabList
            flexDirection="column"
            bg="white"
            boxShadow="0 0 3px 3px rgb(0,0,0,.1)"
            p={3}
            borderRadius={10}
          >
            {tabnames.map((tabname, index) => (
              <Tab _selected={chakraCustomButtonTheme} key={index}>
                {tabname}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabcontent.map((content, index) => (
              <TabPanel key={index}>{content}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};

export default Dashboard;
