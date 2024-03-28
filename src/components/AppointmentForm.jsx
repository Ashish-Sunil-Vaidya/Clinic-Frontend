import {
  Grid,
  InputGroup,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
  FormControl,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { useToast } from '@chakra-ui/react'
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const [patient_name, setPatientName] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [date_of_app, setDateOfApp] = useState("");
  const [time_of_app, setTimeOfApp] = useState("");
  const navigator = useNavigate();
  const toast = useToast()
  const { currentUser, expirationTime, setCurrentUser } = useContext(GlobalContext);

  useEffect(() => {
    if(!currentUser || currentUser?.role !== "receptionist") {
      toast({
        title: 'Unauthorized Request',
        description: "Login to access this page.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      navigator("/login");
    } else if(Date.now() > expirationTime) {
      setCurrentUser(null);
      toast({
        title: 'Token expired',
        description: "Login again",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      navigator("/login");
    }
  }, []);

  const handleAddAppointment = () => {
    const time = time_of_app.split(':');
    let isPm = false;
    if(time[0] > 12) {
      time[0] -= 12;
      isPm = true;
    } 
    let newTime = time[0] + ":" + time[1];
    if(isPm) newTime += " PM"
    else newTime += " AM";
    console.log(newTime)
    axios.post("http://localhost:8000/api/v1/users/receptionist/addAppointment", {
      patient_name,
      mobile_no,
      age,
      gender,
      date_of_app,
      time_of_app: newTime
    })
    .then(response => {
      setPatientName("");
      setAge("");
      setDateOfApp("");
      setTimeOfApp("");
      setGender("");
      setMobileNo("");
      toast({
        title: 'Booked',
        description: "Appointment booked successfully",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
    .catch(error => {
      if(error.response?.status === 400) {
        toast({
          title: 'Bad request',
          description: "All fields are required",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      } else if(error.response?.status === 409) {
        toast({
          title: 'Bad request',
          description: "Appointment already booked",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Server error',
          description: "Something went wrong",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    })
  }

  return (
    <Grid
      bg="white"
      borderRadius="20px"
      gap={5}
      color="cyan.700"
      justify="center"
      align="center"
      p={5}
    >
      <Heading>Add Appointments</Heading>
      <Grid w="100%" h="100%" gap={4}>
        <FormControl>
          <FormLabel fontSize="20px">Name</FormLabel>
          <InputGroup>
            <Input
              fontSize="20px"
              width="100%"
              type="text"
              bgColor="gray.100"
              color="black"
              placeholder="Enter name"
              borderRadius="10px"
              value={patient_name}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="20px">Mobile</FormLabel>
          <InputGroup>
            <Input
              fontSize="20px"
              width="100%"
              type="text"
              bgColor="gray.100"
              color="black"
              placeholder="Enter Mobile no"
              borderRadius="10px"
              value={mobile_no}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="20px">Age</FormLabel>
          <InputGroup>
            <Input
              fontSize="20px"
              width="100%"
              defaultValue={18}
              min={1}
              bgColor="gray.100"
              color="black"
              borderRadius="10px"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="20px">Gender</FormLabel>
          <InputGroup>
            <Select
              fontSize="20px"
              width="100%"
              placeholder="Select Gender"
              bgColor="gray.100"
              color="black"
              borderRadius="10px"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Male</option>
              <option>Female</option>
            </Select>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="20px">Date</FormLabel>
          <InputGroup>
            <Input
              fontSize="20px"
              width="100%"
              placeholder="Select Date"
              size="md"
              type="date"
              bgColor="gray.100"
              color="black"
              borderRadius="10px"
              value={date_of_app}
              onChange={(e) => setDateOfApp(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="20px">Time</FormLabel>
          <InputGroup>
            <Input
              fontSize="20px"
              width="100%"
              placeholder="Select Time"
              size="md"
              type="time"
              bgColor="gray.100"
              color="black"
              borderRadius="10px"
              value={time_of_app}
              onChange={(e) => setTimeOfApp(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </Grid>
      <Button
        colorScheme="cyan"
        color="white"
        onClick={handleAddAppointment}
      >
        Submit
      </Button>
    </Grid>
  );
}

export default AppointmentForm;
