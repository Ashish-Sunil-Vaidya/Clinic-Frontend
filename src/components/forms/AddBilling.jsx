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
import { GlobalContext } from "../../context/GlobalContext";
import {
  isValidAmount,
  isValidFullName,
} from "../helpers/formValidationHelpers";

const AddBilling = ({ patient_name }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, expirationTime, setCurrentUser } =
    useContext(GlobalContext);
  const toast = useToast();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!currentUser || currentUser?.role !== "receptionist") {
      // toast({
      //   title: "Unauthorized Request",
      //   description: "Login to access this page.",
      //   status: "error",
      //   duration: 9000,
      //   isClosable: true,
      // });
      navigator("/");
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
    // if (isValidAmount(amount) && date) {
      setIsLoading(true);
      axios
        .post(
          "http://localhost:8000/api/v1/users/receptionist/addPaymentDetails",
          {
            patient_name,
            amount,
            date,
          }
        )
        .then((response) => {
          setError(false);
          setIsLoading(false);
          setAmount("");
          setDate("");
          toast({
            title: "Success",
            description: "Payment Details Stored",
            status: "success",
            duration: 9000,
            isClosable: true,
          });

          toast({
            title: "Success",
            description: "Payment Details Stored",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((error) => {
          setError(true);
          setIsLoading(false);
          if (error.response?.status === 400) {
            toast({
              title: "Bad request",
              description: "All fields are required",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          } else {
            setIsLoading(false);
            toast({
              title: "Server Error",
              description: "Something went wrong",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        });
    // } else {
    //   if (!isValidAmount(amount)) setAmount(0);
      
    //   setIsLoading(false);
    //   setError(true);
    //   toast({
    //     title: "Invalid Input",
    //     description: "Please enter valid details",
    //     status: "error",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // }
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
      <Heading fontSize="2rem">Add Billing Information</Heading>
      <FormControl>
        <FormLabel fontSize="1.2rem">Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter First Name and Last Name"
          value={patient_name}
          isInvalid={error && !patient_name}
          readOnly
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="1.2rem">Amount</FormLabel>
        <Input
          type="text"
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          isInvalid={(error && !amount) || (error && !isValidAmount(amount))}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="1.2rem">Date</FormLabel>
        <Input
          type="date"
          placeholder="Select Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          isInvalid={error && !date}
        />
      </FormControl>

      <Button
        colorScheme="cyan"
        color="white"
        alignSelf="center"
        onClick={handleAddPayment}
        isLoading={isLoading}
        loadingText={"Saving Details..."}
      >
        Save
      </Button>
    </Grid>
  );
};

export default AddBilling;
