import {
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";

function Billing_Info() {
  return (
    <Flex
      direction="column"
      bg="teal.200"
      width="100%"
      p="10px"
      height="50%"
      borderRadius="20px"
      maxW="900px"
    >
      <Heading fontSize="25px">Billing Information</Heading>
      <FormLabel>Name:</FormLabel>
      <Input
        type="text"
        bg="teal.100"
        placeholder="Enter name"
        fontSize={{ base: "15px", md: "20px" }}
      />
      <FormLabel>Amount:</FormLabel>
      <Input
        type="text"
        bg="teal.100"
        placeholder="Enter Amount (₹)"
        fontSize={{ base: "15px", md: "20px" }}
      />
      <FormLabel>Date:</FormLabel>
      <Input
        type="date"
        bg="teal.100"
        placeholder="Select Date"
        fontSize={{ base: "15px", md: "20px" }}
      />
      <FormLabel>Is Paid:</FormLabel>
      <Select placeholder="Is paid" bg="teal.100">
        <option>Yes</option>
        <option>Not</option>
      </Select>
      <Button
        mt="10px"
        width="30vh"
        type="save"
        colorScheme="teal"
        variant="solid"
        alignSelf="center"
        border="2px"
        borderColor="teal.800"
        borderRadius="10px"
      >
        Save
      </Button>
    </Flex>
  );
}
export default Billing_Info;
