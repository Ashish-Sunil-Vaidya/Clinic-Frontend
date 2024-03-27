import {
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
function Patient_Info({
  patient_name,
  setPatientName,
  mobile_no,
  setMobileNo,
  symptoms,
  setSymptoms,
}) {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [last_visited, setLastVisited] = useState("");
  const [gender, setGender] = useState("");
  const { currentUser, setCurrentUser, expirationTime } =
    useContext(GlobalContext);
  const toast = useToast();
  useEffect(() => {
    if (!currentUser || currentUser?.role != "receptionist") {
      toast({
        title: "Unauthorized Request",
        description: "Only receptionist can access this page.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      navigator("/login");
    } else if (Date.now() > expirationTime) {
      setCurrentUser(null);
      toast({
        title: "Token expired",
        description: "Login again",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      navigator("/login");
    }
  }, []);

  const handleAddPatient = () => {
    console.log(patient_name, mobile_no, age, weight, symptoms, last_visited);
    axios
      .post(
        "http://localhost:8000/api/v1/users/receptionist/addPatientDetails",
        {
          patient_name,
          mobile_no,
          age,
          weight,
          gender,
          symptoms,
          last_visited,
        }
      )
      .then((response) => {
      
        toast({
          title: "Success",
          description: "Patient Details Stored",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Patient Details not stored",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      direction="column"
      bg="cyan.200"
      width="100%"
      p="10px"
      borderRadius="20px"
      maxW="900px"
    >
      <Heading fontSize="1.3rem">Patient Information</Heading>
      <FormLabel>Patient Name:</FormLabel>
      <Input
        type="text"
        bg="cyan.100"
        fontSize={"1.1rem"}
        placeholder="Enter Patient Name:"
        value={patient_name}
        onChange={(e) => setPatientName(e.target.value)}
      />

      <FormLabel>Mobile No:</FormLabel>
      <Input
        type="tel"
        bg="cyan.100"
        fontSize={"1.1rem"}
        placeholder="Enter Mobile No:"
        value={mobile_no}
        onChange={(e) => setMobileNo(e.target.value)}
      />

      <FormLabel>Age:</FormLabel>
      <NumberInput defaultValue="10" min="1" bg="cyan.100" fontSize={"1.1rem"}>
        <NumberInputField
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            console.log(age);
          }}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <FormLabel>Weight:</FormLabel>
      <NumberInput fontSize={"1.1rem"} defaultValue="10" min="1" bg="cyan.100">
        <NumberInputField
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <FormLabel>Gender:</FormLabel>
      <Select
        fontSize={"1.1rem"}
        placeholder="Select Gender"
        bg="cyan.100"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option>Male</option>
        <option>Female</option>
      </Select>

      <FormLabel>Symptoms:</FormLabel>
      <Input
        type="text"
        bg="cyan.100"
        fontSize={"1.1rem"}
        placeholder="Enter Symptoms:"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />

      <FormLabel>Last Visited:</FormLabel>
      <Input
        type="date"
        bg="cyan.100"
        fontSize={"1.1rem"}
        placeholder="Enter Last Visited Date:"
        value={last_visited}
        onChange={(e) => setLastVisited(e.target.value)}
      />
      <Button
        mt="10px"
        width="30vh"
        type="save"
        colorScheme="cyan"
        variant="solid"
        alignSelf="center"
        borderRadius="10px"
        onClick={handleAddPatient}
      >
        Save
      </Button>
    </Flex>
  );
}

export default Patient_Info;
