import {
  Grid,
  Heading,
  FormLabel,
  Input,
  Select,
  Button,
  InputGroup,
} from "@chakra-ui/react";

const Billing = () => {
  return (
    <Grid
      bg="white"
      borderRadius="20px"
      p={10}
      h="calc(100% - 10svh)"
      m={5}
      gap={5}
      color="cyan.700"
      justify="center"
      align="center"
    >
      <Heading fontSize="2rem">Billing Information</Heading>
      <InputGroup display="grid">
        <FormLabel fontSize="1.2rem">Name</FormLabel>
        <Input type="text" placeholder="Enter name" />
      </InputGroup>
      <InputGroup display="grid">
        <FormLabel fontSize="1.2rem">Amount</FormLabel>
        <Input type="text" placeholder="Enter Amount (₹)" />
      </InputGroup>
      <InputGroup display="grid">
        <FormLabel fontSize="1.2rem">Date</FormLabel>
        <Input type="date" placeholder="Select Date" />
      </InputGroup>
      <InputGroup display="grid">
        <FormLabel fontSize="1.2rem">Payment Status</FormLabel>
        <Select placeholder="Select option">
          <option>Paid</option>
          <option>Not Paid</option>
        </Select>
      </InputGroup>
      <Button
        colorScheme="cyan"
        color="white"
        alignSelf="center"
      >
        Save
      </Button>
    </Grid>
  );
};

export default Billing;
