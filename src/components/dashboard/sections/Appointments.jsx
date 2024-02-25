import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Table,
  Icon,
} from "@chakra-ui/react";
import appoinmentsData from "../data/appointmentsData";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const Appointments = () => {
  return (
    <TableContainer>
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
          {appoinmentsData.map((appointment, index) => {
            return (
              <Tr key={index}>
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

export default Appointments;
