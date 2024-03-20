import {
  Button,
  IconButton,
  Input,
  InputGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import patientsData from "./data/patients.data";
import { Search2Icon } from "@chakra-ui/icons";

const Patients = () => {
  
  return (
    <TableContainer
      bgColor="white"
      boxShadow="0 0 2px 2px rgb(0,0,0,.05)"
      my={10}
      mx={3}
      rounded="md"
    >
      <InputGroup
        width="100%"
        alignItems="center"
        display="flex"
        justifySelf="center"
        p="10px"
        gap={3}
      >
        <IconButton
          colorScheme="cyan"
          aria-label="Search database"
          icon={<Search2Icon />}
          color="white"
          fontSize="20px"
        />
        <Input
          type="text"
          fontSize="1.1rem"
          fontWeight="500"
          placeholder="Search"
          p="10px"
          width="100%"
          flex={1}
          border="3px solid #e2e8f0"
        />
      </InputGroup>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Sr.No.</Th>
            <Th>Name</Th>
            <Th>Mobile</Th>
            <Th>Amount</Th>
            <Th>Date</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {patientsData.map((Patient, index) => {
            return (
              <Tr
                key={index}
                _hover={{
                  bg: "cyan.50",
                  cursor: "pointer",
                }}
              >
                <Td>{index + 1}</Td>
                <Td>{Patient.name}</Td>
                <Td>{Patient.mobile}</Td>
                <Td>{Patient.amount}</Td>
                <Td>{Patient.date}</Td>
                <Td display="flex" justifyContent="center">
                  <Button colorScheme="cyan" alignSelf="center" color="white">
                    View Details
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Patients;
