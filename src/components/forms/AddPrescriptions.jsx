import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Box,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
import { useToast } from "@chakra-ui/react";

function AddPrescriptions({ patient_name }) {
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [reportName, setReportName] = useState("");
  const [reportFile, setReportFile] = useState(null);
  const [isLoading, setIsLoading] = useState({
    medicine: false,
    report: false,
  });
  const { currentUser, setCurrentUser, expirationTime } =
    useContext(GlobalContext);
  const toast = useToast();
  const [error, setError] = useState(false);

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

  const handleAddMedicine = () => {
    setIsLoading({ ...isLoading, medicine: true });
    axios
      .post("http://localhost:8000/api/v1/users/receptionist/addMedicine", {
        patient_name,
        medicine_name: medicine,
        dosage,
      })
      .then((response) => {
        setError(false);
        setIsLoading({
          ...isLoading,
          medicine: false,
        });
        setMedicine("");
        setDosage("");
        toast({
          title: "Success",
          description: "Medicine Details Stored",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setError(true);
        setIsLoading({
          ...isLoading,
          medicine: false,
        });
        toast({
          title: "Error",
          description: "Medicine Details not stored",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const handleAddReport = () => {
    setIsLoading({ ...isLoading, report: true });
    const formData = new FormData();
    formData.set("patient_name", patient_name);
    formData.set("report_name", reportName);
    formData.append("reportFile", reportFile);

    axios
      .post(
        "http://localhost:8000/api/v1/users/receptionist/addReport",
        formData
      )
      .then((response) => {
        setError(false);
        setIsLoading({
          ...isLoading,
          report: false,
        });
<<<<<<< HEAD
=======
        setMedicine("");
        setDosage("");
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
        toast({
          title: "Success",
          description: "Report Stored",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setError(true);
        setIsLoading({
          ...isLoading,
          report: false,
        });
        toast({
          title: "Error",
          description: "Report not stored",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
<<<<<<< HEAD
    
      <Flex width="100%" gap={10} h="100%" direction={{
        base: "column",
        md: "row",
        lg: "row",
        xl: "row",
      
      }}>
        <FormControl>
          <FormLabel fontSize="1.2rem">Medicines</FormLabel>
=======
    <Flex direction="column" width="100%" p="10px" gap="10px" maxW="1000px">
      <Flex
        direction="column"
        width="100%"
        p="10px"
        borderRadius="20px"
        id="Medicine"
        gap={9}
      >
        <FormControl>
          <Heading fontSize="25px">Prescription</Heading>
          <Flex justify="space-between" mb={3}>
            <FormLabel fontSize="1.2rem">Medicines</FormLabel>
            <Button
              colorScheme="cyan"
              color="white"
              onClick={handleAddMedicine}
              isLoading={isLoading.medicine}
              loadingText={"Saving..."}
            >
              Save
            </Button>
          </Flex>
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          <Grid
            gap="5px"
        
            justifyItems="center"
          >
            <Input
              bg="white"
              fontSize={{ base: "15px", md: "20px" }}
              type="text"
              placeholder="Enter Medicine name"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              isInvalid={error && !medicine}
<<<<<<< HEAD
              border="2px solid"
              borderColor="cyan.400"
=======
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
            />
            <Textarea
              fontSize={{ base: "15px", md: "20px" }}
              type="text"
              placeholder="Dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              isInvalid={error && !dosage}
<<<<<<< HEAD
              border="2px solid"
              borderColor="cyan.400"
              h="100%"
              flex={1}
              bg="white"
=======
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
            />
            <Button
              colorScheme="cyan"
              color="white"
              onClick={handleAddReport}
              isLoading={isLoading.report}
              loadingText={"Saving..."}
              border="2px solid"
              borderColor="cyan.400"
              width="100%"
            >
              Save
            </Button>
          </Grid>
        </FormControl>

<<<<<<< HEAD
        <FormControl >
          <FormLabel fontSize="1.2rem">Reports</FormLabel>

=======
        <FormControl>
          <Flex justify="space-between" mb={3}>
            <FormLabel fontSize="1.2rem">Reports</FormLabel>
            <Button
              colorScheme="cyan"
              color="white"
              onClick={handleAddReport}
              isLoading={isLoading.report}
              loadingText={"Saving..."}
            >
              Save
            </Button>
          </Flex>
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
          <Grid
            gap="5px"
            direction={{ md: "row", sm: "column", base: "column" }}
            justifyItems="center"
            
          >
            <Input
              bg="white"
              fontSize={{ base: "15px", md: "20px" }}
              type="text"
              placeholder="Enter Report name"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              isInvalid={error && !reportName}
<<<<<<< HEAD
              border="2px solid"
              borderColor="cyan.400"
=======
            />
            <Input
              fontSize={{ base: "15px", md: "20px" }}
              type="file"
              onChange={(e) => setReportFile(e.target.files[0])}
              isInvalid={error && !reportFile}
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
            />
            <Box
              border="2px solid"
              borderColor="cyan.400"
              w="100%"
              rounded="md"
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="white"
              h="100px"
            >
              <Input
                bg="white"
                fontSize={{ base: "15px", md: "20px" }}
                type="file"
                onChange={(e) => setReportFile(e.target.files[0])}
                isInvalid={error && !reportFile}
                opacity={0}
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
            
              />
              {!reportFile && (
                <Text color="cyan.400">Drag or Click here to add file</Text>
              )}
              {reportFile && (
                <Text color="cyan.400">
                  <Box>File Uploaded</Box>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      setReportFile(null);
                    }}
                  >
                    Cancel
                  </Button>
                </Text>
              )}
            </Box>
            <Button
              colorScheme="cyan"
              color="white"
              onClick={handleAddReport}
              isLoading={isLoading.report}
              loadingText={"Saving..."}
              border="2px solid"
              borderColor="cyan.400"
              w="100%"
            >
              Save
            </Button>
          </Grid>
        </FormControl>
      </Flex>
  
  );
}

export default AddPrescriptions;
