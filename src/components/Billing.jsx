import {
  Grid,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Billing = () => {
  const [patient_name, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const { currentUser, expirationTime, setCurrentUser } = useContext(
    GlobalContext
  );
  const toast = useToast();

  useEffect(() => {
    if (!currentUser || currentUser?.role !== "receptionist") {
      toast({
        title: "Unauthorized Request",
        description: "Login to access this page.",
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

  const handleAddPayment = () => {
    axios
      .post("http://localhost:8000/api/v1/users/receptionist/addPaymentDetails", {
        patient_name,
        amount,
        date,
      })
      .then((response) => {
        setPatientName("");
        setAmount("");
        setDate("");
        toast({
          title: "Success",
          description: "Payment Details Stored",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          toast({
            title: "Bad request",
            description: "All fields are required",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Server Error",
            description: "Something went wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
  };

  return (
    <Grid
      bg="white"
      borderRadius="20px"
      p={10}
      h="calc(100% - 10svh)"      
      color="cyan.700"
      justify="center"
      align="center"
    >
      <Heading fontSize="2rem">Billing Information</Heading>
      <FormControl>
        <FormLabel fontSize="1.2rem">Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter name"
          value={patient_name}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="1.2rem">Amount</FormLabel>
        <Input
          type="text"
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="1.2rem">Date</FormLabel>
        <Input
          type="date"
          placeholder="Select Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </FormControl>

      <Button
        colorScheme="cyan"
        color="white"
        alignSelf="center"
        onClick={handleAddPayment}
      >
        Save
      </Button>
    </Grid>
  );
};

export default Billing;
