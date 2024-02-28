import {
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Table,
} from "@chakra-ui/react";
import appointmentsData from "src/components/dashboard/data/appointments.data";


const Appointments = () => {
  return (
    <TableContainer bgColor="white" boxShadow="0 0 2px 2px rgb(0,0,0,.05)" borderRadius={10} >
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
            {/* <Th>Visited?</Th> */}
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
                {/* <Td display="flex" gap={3}>
                  <Icon
                    as={appointment.isVisited ? FaCheckCircle : FaCircleXmark}
                    color={appointment.isVisited ? "green.500" : "red.500"}
                    boxSize={6}
                  />
                  {appointment.isVisited ? "Yes" : "No"}
                </Td> */}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Appointments;
