import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
  Grid,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Button,
  SimpleGrid
} from "@chakra-ui/react";

import {ExternalLinkIcon} from '@chakra-ui/icons'

const PatientModalData = ({ isOpen, onClose, searchedData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalContent>
        <ModalHeader>
          {searchedData !== null ? searchedData?.patient_name : ""}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody display="grid" gridTemplateColumns="500px auto" gap={4}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight="bold">Age</Td>
                <Td>{searchedData !== null ? searchedData?.age : ""}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Weight</Td>
                <Td>{searchedData !== null ? searchedData?.weight : ""}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Gender</Td>
                <Td>{searchedData !== null ? searchedData?.gender : ""}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Symptoms</Td>
                <Td>{searchedData !== null ? searchedData?.symptoms : ""}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Prescriptions</Td>
                <Td>
                  <Table variant="unstyled">
                    <Thead>
                      <Tr>
                        <Th>Medicine Name</Th>
                        <Th>Dosage</Th>
                      </Tr>
                    </Thead>
                    {searchedData !== null
                      ? searchedData.prescriptions.map(
                          (prescription, index) => {
                            return (
                              <Tr key={index} gap={3}>
                                <Td>{prescription.medicine_name}</Td>
                                <Td>{prescription.dosage}</Td>
                              </Tr>
                            );
                          }
                        )
                      : ""}
                  </Table>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Box mt={4} >
            <Text fontWeight="bold" fontSize="xl" mb={4}>
              Reports
            </Text>
            <SimpleGrid
              columns={[1,1,2,3]}
              gap={4}
            >
              {searchedData !== null
                ? searchedData.report.map((repo, index) => {

                    return (
                      <Grid key={index} placeItems="center" gap={3}>
                        <Text textAlign="center" fontWeight="bold">{repo.report_name.toUpperCase()}</Text>
                        <Image src={repo.url} width="80%"/>
                        <Button colorScheme="cyan" color="white" as={Link} textAlign="center" verticalAlign="center" href={repo.url}>View Report   <ExternalLinkIcon ml={3} /></Button>
                      </Grid>
                    );
                  })
                : ""}
            </SimpleGrid>
          </Box>
        </ModalBody>
        {/* <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Preview Bill
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Go to Billing
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default PatientModalData;
