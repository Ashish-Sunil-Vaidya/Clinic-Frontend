import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  UnorderedList,
  ListItem,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";

const PatientModalData = ({ isOpen, onClose, searchedData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {searchedData !== null ? searchedData.patient_name : ""}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {console.log("===  PatientModetData ===", searchedData)}
        </ModalBody>
        <UnorderedList fontSize={"20px"} padding={"30px"}>
          <ListItem>
            Mobile No. : {searchedData !== null ? searchedData.mobile_no : ""}
          </ListItem>
          <ListItem>
            Age : {searchedData !== null ? searchedData.agev : ""}
          </ListItem>
          <ListItem>
            Weight : {searchedData !== null ? searchedData.weight : ""}
          </ListItem>
          <ListItem>
            Gender : {searchedData !== null ? searchedData.gender : ""}
          </ListItem>
          <ListItem>
            Symptoms : {searchedData !== null ? searchedData.symptoms : ""}
          </ListItem>
          {/* <ListItem>
            Prescriptions :
            <UnorderedList>
              {searchedData !== null
                ? searchedData.prescriptions.map((prescription, index) => {
                    console.log(
                      "=== prescription PatientModalData.jsx [55] ===",
                      prescription
                    );
                    return (
                      <UnorderedList key={index}>
                        <ListItem>
                          {prescription.medicine_name} : {prescription.dosage}
                        </ListItem>
                      </UnorderedList>
                    );
                  })
                : ""}
            </UnorderedList>
          </ListItem>
          <ListItem>
            Report :
            {/* <Flex direction={'row'} width={'fit-content'} gap='5px' padding='5px'> */}
            {/* {searchedData !== null
              ? searchedData.report.map((repo, index) => {
                  console.log(
                    "=== prescription PatientModalData.jsx [55] ===",
                    repo
                  );
                  return (
                    <UnorderedList key={index} dir="row">
                      <ListItem>
                        {repo.report_name} :
                        <Image src={repo.url} />
                      </ListItem>
                    </UnorderedList>
                  );
                }) */}
              {/* : ""} */} 
            {/* </Flex> */}
          {/* </ListItem> */}
        </UnorderedList>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Preview Bill
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Go to Billing
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PatientModalData;
