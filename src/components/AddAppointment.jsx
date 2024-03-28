import {
  Grid,
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
  FormControl,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

function AddAppointment({
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
    const [name, surname] = patient_name.split(" ");
    if (!name || !surname) {
      toast({
        title: "Error",
        description: "Please enter valid name and surname",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
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
      gap={9}
    >
      <Flex w="100%" align="center" justify="space-between">
        <Heading fontSize="1.8rem" justifySelf="center">
          Patient Information
        </Heading>
        <Button colorScheme="cyan" color="white" onClick={handleAddPatient}>
          Save
        </Button>
      </Flex>
      <Grid gap={3}>
        <FormControl>
          <FormLabel m={1}>Patient Name</FormLabel>
          <Input
            type="text"
            bg="cyan.100"
            fontSize={"1.1rem"}
            placeholder="Ex: Name Surname"
            value={patient_name}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel m={1}>Mobile No</FormLabel>
          <Input
            type="tel"
            bg="cyan.100"
            fontSize={"1.1rem"}
            placeholder="Ex: 9527343353"
            value={mobile_no}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </FormControl>

        <Flex gap={3}>
          <FormControl>
            <FormLabel m={1}>Age</FormLabel>
            <NumberInput min="1" bg="cyan.100" fontSize={"1.1rem"}>
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
          </FormControl>

          <FormControl>
            <FormLabel m={1}>Weight</FormLabel>
            <NumberInput fontSize={"1.1rem"} min="1" bg="cyan.100">
              <NumberInputField
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel m={1}>Gender</FormLabel>
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
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel m={1}>Symptoms</FormLabel>
          <Input
            type="text"
            bg="cyan.100"
            fontSize={"1.1rem"}
            placeholder="Enter Symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel m={1}>Last Visited</FormLabel>
          <Input
            type="date"
            bg="cyan.100"
            fontSize={"1.1rem"}
            placeholder="Enter Last Visited Date:"
            value={last_visited}
            onChange={(e) => setLastVisited(e.target.value)}
          />
        </FormControl>
      </Grid>
    </Flex>
  );
}

export default AddAppointment;
