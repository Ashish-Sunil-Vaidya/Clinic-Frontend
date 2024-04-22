import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
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
        setMedicine("");
        setDosage("");
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
          <Grid
            gap="5px"
            direction={{ md: "row", sm: "column", base: "column" }}
            justifyItems="center"
          >
            <Input
              fontSize={{ base: "15px", md: "20px" }}
              type="text"
              placeholder="Enter Medicine name"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              isInvalid={error && !medicine}
            />
            <Input
              fontSize={{ base: "15px", md: "20px" }}
              type="text"
              placeholder="Dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              isInvalid={error && !dosage}
            />
          </Grid>
        </FormControl>

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
          <Grid
            gap="5px"
            direction={{ md: "row", sm: "column", base: "column" }}
            justifyItems="center"
          >
            <Input
              fontSize={{ base: "15px", md: "20px" }}
              type="text"
              placeholder="Enter Report name"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              isInvalid={error && !reportName}
            />
            <Input
              fontSize={{ base: "15px", md: "20px" }}
              type="file"
              onChange={(e) => setReportFile(e.target.files[0])}
              isInvalid={error && !reportFile}
            />
          </Grid>
        </FormControl>
      </Flex>
    </Flex>
  );
}

export default AddPrescriptions;
