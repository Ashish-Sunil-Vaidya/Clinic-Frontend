import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  useToast,
  Heading,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import {
  isValidAge,
  isValidAmount,
  isValidFullName,
  isValidMobileNo,
  isValidWeight,
} from "../helpers/formValidationHelpers";

function AddPatientInfo({
  patient_name,
  setPatientName,
  mobile_no,
  setMobileNo,
  symptoms,
  setSymptoms,
<<<<<<< HEAD
  patientsObject,
=======
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [last_visited, setLastVisited] = useState("");
  const [gender, setGender] = useState("");
  const { currentUser, setCurrentUser, expirationTime } =
    useContext(GlobalContext);
  const toast = useToast();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!currentUser || currentUser?.role !== "receptionist") {
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

<<<<<<< HEAD
  useEffect(() => {
    if (patientsObject) {
      setAge(patientsObject.age);
      setWeight(patientsObject.weight);
      setGender(patientsObject.gender);
    }
  }, []);

=======
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
  const handleAddPatient = () => {
    setIsLoading(true);
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
        if (
          isValidAge(age) &&
          isValidWeight(weight) &&
          isValidMobileNo(mobile_no)
        ) {
          setError(false);
<<<<<<< HEAD
=======
          setPatientName("");
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          setMobileNo("");
          setAge(0);
          setWeight(0);
          setGender("");
          setSymptoms("");
          setLastVisited("");
          setIsLoading(false);
          toast({
            title: "Success",
            description: "Patient Details Stored",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          setError(true);
          setIsLoading(false);
          toast({
            title: "Invalid Input",
            description: "Please enter valid details",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
        if (!isValidFullName(patient_name)) {
          setPatientName("");
          toast({
            title: "Error",
            description: "Please enter first name and last name",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
<<<<<<< HEAD
        } else {
          toast({
            title: "Error",
            description: "Patient Details not stored",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
  };

  const handleUpdateDetails = () => {
    setIsLoading(true);
    axios
      .post(
        "http://localhost:8000/api/v1/users/receptionist/updatePatientDetails",
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
        if (
          isValidAge(age) &&
          isValidWeight(weight) &&
          isValidMobileNo(mobile_no)
        ) {
          setError(false);
          setAge(0);
          setWeight(0);
          setGender("");
          setLastVisited("");
          setIsLoading(false);
          toast({
            title: "Success",
            description: "Patient Details Updated",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          setError(true);
          setIsLoading(false);
          toast({
            title: "Failure",
            description: "Unable to update patients details",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
        if (!isValidFullName(patient_name)) {
          setPatientName("");
          toast({
            title: "Error",
            description: "Please enter first name and last name",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
=======
         
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
        } else {
          toast({
            title: "Error",
            description: "Patient Details not stored",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
  };

  return (
    <Flex
      direction="column"
      width="100%"
      p="10px"
      borderRadius="20px"
      maxW="900px"
      gap={3}
    >
<<<<<<< HEAD
      <FormControl>
        <FormLabel m={0} color="cyan.700">
          Patient Name
        </FormLabel>
        <Input
          bg="white"
          border="2px solid"
          borderColor="cyan.400"
=======
      <Heading fontSize="1.3rem">Patient Information</Heading>
      <FormControl>
        <FormLabel m={0}>Patient Name</FormLabel>
        <Input
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          type="text"
          fontSize={"1.1rem"}
          placeholder="Enter Patient Name:"
          value={patient_name}
          onChange={(e) => setPatientName(e.target.value)}
          isInvalid={error && !patient_name}
<<<<<<< HEAD
          readOnly={patientsObject ? true : false}
        />
      </FormControl>

      <Flex gap={3}>
        <FormControl>
          <FormLabel m={0} color="cyan.700">
            Mobile No
          </FormLabel>
          <Input
            bg="white"
            border="2px solid"
            borderColor="cyan.400"
            type="tel"
            fontSize={"1.1rem"}
            placeholder="Enter Mobile No:"
            value={mobile_no}
            onChange={(e) => setMobileNo(e.target.value)}
            isInvalid={
              (error && !mobile_no) || (error && !isValidMobileNo(mobile_no))
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel m={0} color="cyan.700">
            Last Visited
          </FormLabel>
          <Input
            bg="white"
            border="2px solid"
            borderColor="cyan.400"
            type="date"
            fontSize={"1.1rem"}
            placeholder="Enter Last Visited Date:"
            value={last_visited}
            onChange={(e) => setLastVisited(e.target.value)}
            isInvalid={error && !last_visited}
          />
        </FormControl>
      </Flex>

      <HStack>
        <FormControl>
          <FormLabel m={0} color="cyan.700">
            Age
          </FormLabel>
          <NumberInput
          bg="white"
            fontSize={"1.1rem"}
            isInvalid={(error && !age) || (error && !isValidAge(age))}
            value={age}
          >
            <NumberInputField
            bg="white"
              border="2px solid"
              borderColor="cyan.400"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
=======
        />
      </FormControl>

      <FormControl>
        <FormLabel m={0}>Mobile No</FormLabel>
        <Input
          type="tel"
          fontSize={"1.1rem"}
          placeholder="Enter Mobile No:"
          value={mobile_no}
          onChange={(e) => setMobileNo(e.target.value)}
          isInvalid={
            (error && !mobile_no) || (error && !isValidMobileNo(mobile_no))
          }
        />
      </FormControl>

      <HStack>
        <FormControl>
          <FormLabel m={0}>Age</FormLabel>
          <NumberInput
            fontSize={"1.1rem"}
            isInvalid={(error && !age) || (error && !isValidAge(age))}
          >
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
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          </NumberInput>
        </FormControl>

        <FormControl>
<<<<<<< HEAD
          <FormLabel m={0} color="cyan.700">
            Weight
          </FormLabel>
          <NumberInput
          bg="white"
            fontSize={"1.1rem"}
            value={weight}
            isInvalid={(error && !weight) || (error && !isValidWeight(weight))}
          >
            <NumberInputField
              onChange={(e) => setWeight(e.target.value)}
              border="2px solid"
              borderColor="cyan.400"
            />
=======
          <FormLabel m={0}>Weight</FormLabel>
          <NumberInput
            fontSize={"1.1rem"}
            isInvalid={(error && !weight) || (error && !isValidWeight(weight))}
          >
            <NumberInputField
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          </NumberInput>
        </FormControl>

        <FormControl>
<<<<<<< HEAD
          <FormLabel m={0} color="cyan.700">
            Gender
          </FormLabel>
          <Select
          bg="white"
=======
          <FormLabel m={0}>Gender</FormLabel>
          <Select
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
            fontSize={"1.1rem"}
            placeholder="Select Gender"
            value={gender}
            isInvalid={error && !gender}
            onChange={(e) => setGender(e.target.value)}
<<<<<<< HEAD
            border="2px solid"
            borderColor="cyan.400"
=======
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          >
            <option>Male</option>
            <option>Female</option>
          </Select>
        </FormControl>
      </HStack>

      <FormControl>
<<<<<<< HEAD
        <FormLabel m={0} color="cyan.700">
          Symptoms
        </FormLabel>
        <Textarea
        bg="white"
=======
        <FormLabel m={0}>Symptoms</FormLabel>
        <Textarea
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          fontSize={"1.1rem"}
          placeholder="Enter Symptoms:"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          isInvalid={error && !symptoms}
<<<<<<< HEAD
          border="2px solid"
          borderColor="cyan.400"
=======
        />
      </FormControl>

      <FormControl>
        <FormLabel m={0}>Last Visited</FormLabel>
        <Input
          type="date"
          fontSize={"1.1rem"}
          placeholder="Enter Last Visited Date:"
          value={last_visited}
          onChange={(e) => setLastVisited(e.target.value)}
          isInvalid={error && !last_visited}
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
        />
      </FormControl>

      <Button
        w="100%"
        mt="10px"
        type="save"
        colorScheme="cyan"
        color="white"
        variant="solid"
        alignSelf="center"
        borderRadius="10px"
<<<<<<< HEAD
        onClick={patientsObject ? handleUpdateDetails : handleAddPatient}
=======
        onClick={handleAddPatient}
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
        isLoading={isLoading}
        loadingText={"Saving Details..."}
      >
        Save
      </Button>
    </Flex>
  );
}

export default AddPatientInfo;
