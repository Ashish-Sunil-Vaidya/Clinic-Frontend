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
<<<<<<< HEAD
import { useEffect, useState } from "react";

function AddPatientDetails({patientsObject}) {
=======
import { useState } from "react";

function AddPatientDetails() {
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
  const [patient_name, setPatientName] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [symptoms, setSymptoms] = useState("");
  useEffect(() => {
    if(patientsObject) {
      setPatientName(patientsObject.patient_name);
      setMobileNo(patientsObject.mobile_no);
      setSymptoms(patientsObject.symptoms)
    }
  }, [])
  return (
<<<<<<< HEAD
    <Flex w="100%" direction="column">
=======
    <Flex direction="column" zIndex={9999} top={0}>
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
      <Flex
        direction={{ md: "row", sm: "column", base: "column" }}
        p="10px"
        gap="10px"
        alignItems="center"
      >
        <Flex
          height="100%"
          width="100%"
<<<<<<< HEAD
=======
          direction="column"
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          gap={3}
          p="10px"
          justifyItems="center"
        >
          <Input
            fontSize="1.1rem"
            type="text"
            placeholder="Name Surname"
            value={patient_name}
<<<<<<< HEAD
            readOnly
=======
            disabled
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          />
          <Input
            fontSize="1.1rem"
            type="text"
            placeholder="Mobile"
            value={mobile_no}
<<<<<<< HEAD
            readOnly
=======
            disabled
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          />
          <Input
            fontSize="1.1rem"
            type="text"
            placeholder="Symptoms"
            value={symptoms}
<<<<<<< HEAD
            readOnly
          />
        </Flex>
      </Flex>
      <Tabs variant="soft-rounded" h="100%" gap={3} align="center" display="flex" flexDirection="column">
=======
            disabled
          />
        </Flex>
      </Flex>
      <Tabs variant="soft-rounded" align="center">
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
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
<<<<<<< HEAD
        <TabPanels flex={1} bgColor="cyan.50">
=======
        <TabPanels>
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          <TabPanel>
            <Flex justifyContent="center">
              <AddPatientInfo
                patient_name={patient_name}
                setPatientName={setPatientName}
                mobile_no={mobile_no}
                setMobileNo={setMobileNo}
                symptoms={symptoms}
                setSymptoms={setSymptoms}
                patientsObject={patientsObject}
              />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex justifyContent="center">
              <Prescriptions patient_name={patient_name} patientsObject={patientsObject} />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex justifyContent="center">
<<<<<<< HEAD
              <AddBillingInfo patient_name={patient_name} patientsObject={patientsObject}/>
=======
              <AddBillingInfo patient_name={patient_name} />
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default AddPatientDetails;
