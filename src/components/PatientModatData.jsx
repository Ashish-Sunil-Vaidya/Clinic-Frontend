import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,

} from "@chakra-ui/react";

const PatientModatData = ({
    isOpen,
    onClose,
    searchData
  }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          velit, beatae harum vero fugit eius facilis pariatur mollitia corporis
          reiciendis aspernatur debitis nostrum consequuntur officiis molestias
          quod minus, non eaque ab iste quidem. Eaque ipsam consequatur amet
          culpa soluta illo asperiores itaque tempore animi quibusdam nostrum
          nemo omnis, aliquam ducimus ad deleniti dignissimos iusto odit
          architecto iure, ab officiis vitae. Quod eum nisi sit.
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PatientModatData;
