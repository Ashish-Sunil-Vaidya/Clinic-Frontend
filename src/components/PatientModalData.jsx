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
} from "@chakra-ui/react";

const PatientModatData = ({ isOpen, onClose, searchedData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
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
            {" "}
            Mobile No. : {searchedData !== null ? searchedData.mobile_no : ""}
          </ListItem>
          <ListItem>
            {" "}
            Age : {searchedData !== null ? searchedData.agev : ""}
          </ListItem>
          <ListItem>
            {" "}
            Weight : {searchedData !== null ? searchedData.weight : ""}
          </ListItem>
          <ListItem>
            {" "}
            Gender : {searchedData !== null ? searchedData.gender : ""}
          </ListItem>
          <ListItem>
            {" "}
            Symptoms : {searchedData !== null ? searchedData.symptoms : ""}
          </ListItem>
          <ListItem>
            {" "}
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
                        <ListItem>{prescription.medicine_name}</ListItem>
                        <ListItem>{prescription.dosage}</ListItem>
                      </UnorderedList>
                    );
                  })
                : ""}
            </UnorderedList>
          </ListItem>
        </UnorderedList>
    
      </ModalContent>
    </Modal>
  );
};

export default PatientModatData;
