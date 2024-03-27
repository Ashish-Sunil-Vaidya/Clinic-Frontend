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
  Button, Flex
} from "@chakra-ui/react";

const PatientModatData = ({ isOpen, onClose, searchedData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
        {searchedData !== null ? searchedData.patient_name : ''}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {console.log("===  PatientModetData ===", searchedData)}
        </ModalBody>
        <UnorderedList fontSize={"20px"} padding={'30px'}>
          <ListItem> Mobile No. : {searchedData !== null ? searchedData.mobile_no : ''}</ListItem>
          <ListItem> Age : {searchedData !== null ? searchedData.agev : ''}</ListItem>
          <ListItem> Weight : {searchedData !== null ? searchedData.weight : ''}</ListItem>
          <ListItem> Gender : {searchedData !== null ? searchedData.gender : ''}</ListItem>
          <ListItem> Symptoms : {searchedData !== null ? searchedData.symptoms : ''}</ListItem>
          <ListItem> </ListItem>
        </UnorderedList>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PatientModatData;
