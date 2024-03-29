import { Box, Button, Divider, Flex, Grid, Image } from "@chakra-ui/react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import clinicImg from "../assets/clinic.jpeg";
import Header from "../components/Header";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate  } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
const DoctorHome = () => {
  const [tabValue, setTabValue] = useState("Dashboard");
  const { currentUser, setCurrentUser, expirationTime } = useContext(GlobalContext);
  const navigator = useNavigate();
  const toast = useToast()
  useEffect(() => {
    if(!currentUser || currentUser.role !== "doctor") toast({
      title: 'Invalid Role.',
      description: "Only doctor can access this page.",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    if(Date.now() > expirationTime) {
      setCurrentUser(null);
      navigator("/login")
    }
  }, [])


  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "minmax(200px,20%) auto",
        lg: "minmax(200px,20%) auto",
        xl: "minmax(200px,20%) auto",
      }}
      h="100svh"
    >
      <Box
        zIndex={2}
        p={4}
        borderRight="2px"
        borderColor="gray.100"
        display={{
          base: "none",
          lg: "block",
          xl: "block",
          md: "block",
        }}
      >
        <Flex align="center"  >
          <Image
            boxSize="50px"
            objectFit="cover"
            src={logo}
            alt="Code Surgery Squad"
            borderRadius="50%"
          />
          <Box fontSize="1.1rem" color="cyan.600" ml={2}>
            Home
          </Box>
        </Flex>
        <Divider orientation="horizontal" my={3} borderWidth={2} />
        {/* <Box position="relative" overflow="hidden">
          <Image src={clinicImg} h="200px" rounded="md" />
          <Box
            rounded="md"
            zIndex={0}
            position="absolute"
            textAlign="center"
            py="1rem"
            fontWeight="bold"
            w="100%"
            bottom={0}
            color="white"
            bgColor="rgb(0,0,0,.5)"
          >
            Dr. Sunil Vaidya's Clinic
          </Box>
        </Box> */}
        {/* <Divider orientation="horizontal" my={3} borderWidth={2} /> */}
        <Flex direction="column" gap={3}>
          <NavLink to="/user/doctor/dashboard">
            <Button
              w="100%"
              colorScheme="cyan"
              color="white"
              onClick={() => setTabValue("Dashboard")}
            >
              Dashboard
            </Button>
          </NavLink>
          <NavLink to="/user/doctor/schedules">
            <Button
              w="100%"
              colorScheme="cyan"
              color="white"
              onClick={() => setTabValue("Schedules")}
            >
              Schedules
            </Button>
          </NavLink>
          <NavLink to="/user/doctor/patients">
            <Button
              w="100%"
              colorScheme="cyan"
              color="white"
              onClick={() => setTabValue("Patients History")}
            >
              Patients History
            </Button>
          </NavLink>
          {/* <NavLink to="/user/doctor/payments">
            <Button w="100%" colorScheme="cyan" color="white">
              Payments
            </Button>
          </NavLink> */}
        </Flex>
        <Divider orientation="horizontal" my={3} borderWidth={2} />
      </Box>
      <Grid
        zIndex={1}
        px={{ base: 0, md: 10, lg: 10, xl: 10 }}
        templateRows={{
          base: "auto auto",
          md: "10svh 90svh",
          lg: "10svh 90svh",
          xl: "10svh 90svh",
        }}
        bgColor="white"
      >
        <Header tabValue={tabValue} setTabValue={setTabValue} role="doctor" />

        <Box overflowY="auto" h="100%">
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DoctorHome;
