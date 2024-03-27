import {
  Flex,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Patient_Info from "./Patient_Info.jsx";
import Prescriptions from "./Prescriptions.jsx";
import Billing_Info from "./Add_Billing_Info.jsx";
import { useState } from "react";

function Patient_Detail() {
  const [patient_name, setPatientName] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [symptoms, setSymptoms] = useState("");
  return (
    <Flex direction="column" bg="cyan.100" zIndex={9999} top={0}>
      <Flex
        direction={{ md: "row", sm: "column", base: "column" }}
        bg="cyan.100"
        p="10px"
        gap="10px"
        alignItems="center"
      >
        <Flex
          height="100%"
          width="100%"
          direction="column"
          p="10px"
          justifyItems="center"
        >
          <Input
            textColor="teal.800"
            bg="cyan.50"
            fontSize="1.1rem"
            type="text"
            placeholder="Name Surname"
            value={patient_name}
          />
        </Flex>
        <Flex height="100%" width="100%" direction="column" p="10px">
          <Input
            textColor="teal.800"
            bg="cyan.50"
            fontSize="1.1rem"
            type="text"
            placeholder="Mobile"
            value={mobile_no}
          />
          <Input
            textColor="teal.800"
            bg="cyan.50"
            fontSize="1.1rem"
            type="text"
            placeholder="Symptoms"
            value={symptoms}
          />
        </Flex>
      </Flex>
      <Tabs variant="enclosed" align="center">
        <TabList>
          <Tab
            fontSize="20px"
            fontWeight="500"
            color="cyan.800"
            _selected={{ bg: "cyan.200" }}
          >
            Patient Details
          </Tab>
          <Tab
            fontSize="20px"
            fontWeight="500"
            color="cyan.800"
            _selected={{ bg: "cyan.200" }}
          >
            Prescriptions
          </Tab>
          <Tab
            fontSize="20px"
            fontWeight="500"
            color="cyan.800"
            _selected={{ bg: "cyan.200" }}
          >
            Billing Details
          </Tab>
        </TabList>
        <TabPanels bg="cyan.200">
          <TabPanel>
            <Flex justifyContent="center">
              <Patient_Info
                patient_name={patient_name}
                setPatientName={setPatientName}
                mobile_no={mobile_no}
                setMobileNo={setMobileNo}
                symptoms={symptoms}
                setSymptoms={setSymptoms}
              />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex justifyContent="center">
              <Prescriptions patient_name={patient_name} />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex justifyContent="center">
              <Billing_Info patient_name={patient_name} />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default Patient_Detail;
