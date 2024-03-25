import {
  Grid,
  InputGroup,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react"
const AppointmentForm = () => {
  const [patient_name, setPatientName] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [date_of_app, setDateOfApp] = useState("");
  const [time_of_app, setTimeOfApp] = useState("");

  return (
    <Grid
      bg="white"
      borderRadius="20px"
      h="calc(100% - 10svh)"
      gap={5}
      color="cyan.700"
      justify="center"
      align="center"
    >
      <Heading>Add Appointments</Heading>
      <Grid w="100%" h="100%" gap={4}>
        <Grid alignItems="center">
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
        </Grid>
        <Grid alignItems="center">
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
        </Grid>
        <Grid alignItems="center">
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
        </Grid>
        <Grid alignItems="center">
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
        </Grid>
        <Grid alignItems="center">
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
        </Grid>
        <Grid alignItems="center">
          <FormLabel fontSize="20px">Time</FormLabel>
          <InputGroup>
            <Input
              fontSize="20px"
              width="100%"
              placeholder="Select Date"
              size="md"
              type="time"
              bgColor="gray.100"
              color="black"
              borderRadius="10px"
              value={time_of_app}
              onChange={(e) => setTimeOfApp(e.target.value)}
            />
          </InputGroup>
        </Grid>
      </Grid>
      <Button  colorScheme="cyan" color="white">
        Submit
      </Button>
    </Grid>
  );
};

export default AppointmentForm;
