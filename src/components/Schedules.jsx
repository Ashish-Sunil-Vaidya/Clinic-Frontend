import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Table,
  InputGroup,
  Input,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import appointmentsData from "./data/appointments.data";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const Schedules = () => {
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
            <Th>SrNo</Th>
            <Th>Name</Th>
            <Th>Mobile</Th>
            <Th>Gender</Th>
            <Th>Age</Th>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Visited?</Th>
          </Tr>
        </Thead>
        <Tbody>
          {appointmentsData.map((appointment, index) => {
            return (
              <Tr
                key={index}
                _hover={{
                  bg: "cyan.50",
                  cursor: "pointer",
                }}
              >
                <Td>{index + 1}</Td>
                <Td>{appointment.name}</Td>
                <Td>{appointment.mobile}</Td>
                <Td>{appointment.gender}</Td>
                <Td>{appointment.age}</Td>
                <Td>{appointment.date}</Td>
                <Td>{appointment.time}</Td>
                <Td display="flex" gap={3}>
                  <Icon
                    as={appointment.isVisited ? FaCheckCircle : FaCircleXmark}
                    color={appointment.isVisited ? "green.500" : "red.500"}
                    boxSize={6}
                  />
                  {appointment.isVisited ? "Yes" : "No"}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Schedules;
