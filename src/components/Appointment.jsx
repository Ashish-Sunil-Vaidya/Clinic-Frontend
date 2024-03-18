import {
  Box,
  Flex,
  Grid,
  InputGroup,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
} from "@chakra-ui/react";

const Appointment = () => {
  return (
    <Box
      rounded="20px"
      p="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="cyan.700"
    >
      <Heading>Add Appointments</Heading>
      <Grid w="100%" h="100%" gap={4} >
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
            />
          </InputGroup>
        </Grid>
        <Grid alignItems="center">
          <FormLabel fontSize="20px">Visited</FormLabel>
          <InputGroup>
            <Select
              fontSize="20px"
              width="100%"
              placeholder="Is visited "
              bgColor="gray.100"
              color="black"
              borderRadius="10px"
            >
              <option>Yes</option>
              <option>No</option>
            </Select>
          </InputGroup>
        </Grid>
      </Grid>
      <Button width="150px" mt={4} type="submit" colorScheme="blue">
        Submit
      </Button>
    </Box>
  );
};

export default Appointment;
