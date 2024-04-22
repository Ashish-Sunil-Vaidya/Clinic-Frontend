import {
  Flex,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import AddPatientInfo from "./AddPatientInfo.jsx";
import Prescriptions from "./AddPrescriptions.jsx";
import AddBillingInfo from "./AddBilling.jsx";
import { useState } from "react";

function AddPatientDetails() {
  const [patient_name, setPatientName] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [symptoms, setSymptoms] = useState("");
  return (
    <Flex direction="column" zIndex={9999} top={0}>
      <Flex
        direction={{ md: "row", sm: "column", base: "column" }}
        p="10px"
        gap="10px"
        alignItems="center"
      >
        <Flex
          height="100%"
          width="100%"
          direction="column"
          gap={3}
          p="10px"
          justifyItems="center"
        >
          <Input
            fontSize="1.1rem"
            type="text"
            placeholder="Name Surname"
            value={patient_name}
            disabled
          />
          <Input
            fontSize="1.1rem"
            type="text"
            placeholder="Mobile"
            value={mobile_no}
            disabled
          />
          <Input
            fontSize="1.1rem"
            type="text"
            placeholder="Symptoms"
            value={symptoms}
            disabled
          />
        </Flex>
      </Flex>
      <Tabs variant="soft-rounded" align="center">
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
        <TabPanels>
          <TabPanel>
            <Flex justifyContent="center">
              <AddPatientInfo
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
              <AddBillingInfo patient_name={patient_name} />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default AddPatientDetails;
