import {
  Button,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
function Prescriptions({ patient_name }) {
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [reports, setReports] = useState("");
  const [reportFile, setReportFile] = useState(null);
  const { currentUser, setCurrentUser, expirationTime } =
    useContext(GlobalContext);
  const toast = useToast();
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
    console.log(medicine, dosage, patient_name);
    axios
      .post("http://localhost:8000/api/v1/users/receptionist/addMedicine", {
        patient_name,
        medicine_name: medicine,
        dosage,
      })
      .then((response) => {
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
    console.log(reports, reportFile, patient_name);
    const formData = new FormData();
    formData.set("patient_name", patient_name);
    formData.set("report_name", reports);
    formData.append("reportFile", reportFile);

    axios
      .post(
        "http://localhost:8000/api/v1/users/receptionist/addReport",
        formData
      )
      .then((response) => {
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
        bg="cyan.200"
        width="100%"
        p="10px"
        borderRadius="20px"
        id="Medicine"
      >
        <Heading fontSize="25px">Prescription</Heading>
        <FormLabel> Medicines : </FormLabel>
        <Flex
          gap="5px"
          direction={{ md: "row", sm: "column", base: "column" }}
          justifyItems="center"
        >
          <Input
            fontSize={{ base: "15px", md: "20px" }}
            type="text"
            bg="cyan.100"
            placeholder="Enter Medicine name :"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
          <Input
            fontSize={{ base: "15px", md: "20px" }}
            type="text"
            bg="cyan.100"
            placeholder="Dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
          <Button colorScheme="cyan" color="white" onClick={handleAddMedicine}>
            Save
          </Button>
        </Flex>

        <FormLabel> Reports : </FormLabel>
        <Flex
          gap="5px"
          direction={{ md: "row", sm: "column", base: "column" }}
          justifyItems="center"
        >
          <Input
            fontSize={{ base: "15px", md: "20px" }}
            type="text"
            bg="cyan.100"
            placeholder="Enter Report name :"
            value={reports}
            onChange={(e) => setReports(e.target.value)}
          />
          <Input
            fontSize={{ base: "15px", md: "20px" }}
            type="file"
            bg="cyan.100"
            onChange={(e) => setReportFile(e.target.files[0])}
          />
          <Button colorScheme="cyan" color="white" onClick={handleAddReport}>
            Save
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Prescriptions;
