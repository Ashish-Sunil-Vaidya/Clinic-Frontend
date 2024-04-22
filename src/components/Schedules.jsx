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
  // Text,
  // Card,
  // CardHeader,
  // CardBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Schedules = () => {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const { currentUser } = useContext(GlobalContext);
  const toast = useToast();
  const navigator = useNavigate();
  const [searchKey, setSearchKey] = useState("");

  // Demo Commit

  useEffect(() => {
    if (!currentUser) {
      toast({
        title: "Unauthorized Request",
        description: "Login to access this page.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      navigator("/login");
    }
    axios
      .get("http://localhost:8000/api/v1/users/appointments")
      .then((response) => {
        setAppointmentsData(response.data.data);
      })
      .catch((error) =>
        toast({
          title: "Unable to fetch Data",
          description: "something went wrong when fetching appointments",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      );
  }, []);

  const getAddPatientDetailss = (patientName) => {
    if (toast.isActive("t1")) {
      toast.closeAll();
    }
    const [name, surname] = patientName.split(" ");
    axios
      .get(`http://localhost:8000/api/v1/users/details/${name}%20${surname}`)
      .then((response) => {
        if (currentUser.role === "doctor") {
          navigator(`/user/doctor/patient/${name}%20${surname}`, {
            state: { data: response.data.data },
          });
        } else {
          navigator(`/user/receptionist/patient/${name}%20${surname}`, {
            state: { data: response.data.data },
          });
        }
      })
      .catch((error) => {
        switch (error.response.status) {
          case 400:
            toast({
              id: "t1",
              title: "Bad Request",
              description: "Data not found",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            break;
          case 404:
            toast({
              id: "t1",
              title: "Not Found",
              description: "No data found for the following name",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            break;
          case 500:
            toast({
              id: "t1",
              title: "Internal Server Error",
              description: "Something went wrong when fetching appointments",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            break;
          default:
            toast({
              id: "t1",
              title: "Unable to fetch Data",
              description: "something went wrong when fetching appointments",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
        }
      });
  };

  const filteredAppointments = appointmentsData.filter(({ patient_name }) => {
    return patient_name.toLowerCase().includes(searchKey.toLowerCase());
  });

  return (
    <>
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
            onClick={getAddPatientDetailss}
          />
          <Input
            type="text"
            fontSize="1.1rem"
            fontWeight="500"
            placeholder="Search Example: Name Surname"
            p="10px"
            width="100%"
            flex={1}
            border="3px solid #e2e8f0"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
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
            </Tr>
          </Thead>
          <Tbody>
            {filteredAppointments.map((appointment, index) => {
              return (
                <Tr
                  key={index}
                  _hover={{
                    bg: "cyan.50",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    getAddPatientDetailss(appointment.patient_name);
                  }}
                >
                  <Td>{index + 1}</Td>
                  <Td>{appointment.patient_name}</Td>
                  <Td>{appointment.mobile_no}</Td>
                  <Td>{appointment.gender}</Td>
                  <Td>{appointment.age}</Td>
                  <Td>{appointment.date_of_app.substring(0, 10)}</Td>
                  <Td>{appointment.time_of_app}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Schedules;
