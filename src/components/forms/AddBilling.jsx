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
<<<<<<< HEAD
import {
  isValidAmount,
  isValidFullName,
} from "../helpers/formValidationHelpers";

const AddBilling = ({ patient_name }) => {
=======
import { isValidAmount, isValidFullName } from "../helpers/formValidationHelpers";

const AddBilling = () => {
  const [patient_name, setPatientName] = useState("");
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
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
<<<<<<< HEAD
    // if (isValidAmount(amount) && date) {
=======
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
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
<<<<<<< HEAD
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
=======
        if (isValidAmount(amount) && date && isValidFullName(patient_name)) {
          setError(false);
          setIsLoading(false);
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
        } else {
          if(!isValidAmount(amount)) setAmount("");
          if(!isValidFullName(patient_name)) setPatientName("");

          setIsLoading(false);
          setError(true);
          toast({
            title: "Invalid Input",
            description: "Please enter valid details",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
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
      borderRadius="20px"
      p={10}
<<<<<<< HEAD
=======
      h="calc(100% - 10svh)"
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
      color="cyan.700"
      justify="center"
      align="center"
      width="100%"
      gap={3}
    >
<<<<<<< HEAD
=======
      <Heading fontSize="2rem">Add Billing Information</Heading>
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
      <FormControl>
        <FormLabel fontSize="1.1rem" m={0}>
          Name
        </FormLabel>
        <Input
          
          bg="white"
          border="2px solid"
          borderColor="cyan.500"
          type="text"
          placeholder="Enter First Name and Last Name"
          value={patient_name}
<<<<<<< HEAD
          isInvalid={error && !patient_name}
          readOnly
=======
          onChange={(e) => setPatientName(e.target.value)}
          isInvalid={error && !patient_name}
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="1.1rem" m={0}>
          Amount
        </FormLabel>
        <Input
          
          bg="white"
          border="2px solid"
          borderColor="cyan.500"
          type="text"
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
<<<<<<< HEAD
          isInvalid={(error && !amount) || (error && !isValidAmount(amount))}
=======
          isInvalid={error && !amount || error && !isValidAmount(amount)}
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="1.1rem" m={0}>
          Date
        </FormLabel>
        <Input
          
          bg="white"
          border="2px solid"
          borderColor="cyan.500"
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
