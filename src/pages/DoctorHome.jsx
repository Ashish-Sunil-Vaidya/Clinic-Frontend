import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Header from "../components/Header";
<<<<<<< HEAD
import { useContext, useEffect } from "react";
=======
import {  useContext, useEffect } from "react";
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
const DoctorHome = () => {
<<<<<<< HEAD
  const {
    currentUser,
    setCurrentUser,
    expirationTime,
    activeTab,
    setActiveTab,
  } = useContext(GlobalContext);
=======
  const { currentUser, setCurrentUser, expirationTime } = useContext(GlobalContext);
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
  const navigator = useNavigate();
  const toast = useToast();
  useEffect(() => {
    if (!currentUser || currentUser.role !== "doctor")
      toast({
        title: "Invalid Role.",
        description: "Only doctor can access this page.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    if (Date.now() > expirationTime) {
      setCurrentUser(null);
      navigator("/login");
    }
  }, []);

  const tabs = [
    { name: "Dashboard", path: "/user/doctor/dashboard" },
    { name: "Schedules", path: "/user/doctor/schedules" },
    { name: "Patients", path: "/user/doctor/patients" },
  ];

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "minmax(200px,17%) auto",
        lg: "minmax(200px,17%) auto",
        xl: "minmax(200px,17%) auto",
      }}
      h="100svh"
     
    >
      <Box
        zIndex={2}
        display={{
          base: "none",
          lg: "block",
          xl: "block",
          md: "block",
        }}
        bg="cyan.400"
      >
        <Text
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          py={5}
          fontSize="1.3rem"
          bgColor="cyan.500"
        >
          <HamburgerIcon />
          Menu
        </Text>
        {/* <Divider orientation="horizontal" my={3} borderWidth={2} /> */}
        <Flex direction="column" >
          {tabs.map((tab, index) => (
            <Link
              to={tab.path}
              key={index}
              as={NavLink}
              _activeLink={{
                bgColor: "white",
                color: "cyan.400",
              }}
              p={3}
              textAlign="center"
              fontWeight={600}
              fontSize="1.2rem"
              color="white"
<<<<<<< HEAD
              _hover={{
                textDecoration: "none",
              }}
            >
              {tab.name}
            </Link>
          ))}
=======
            >
              Dashboard
            </Button>
          </NavLink>
          <NavLink to="/user/doctor/schedules">
            <Button
              w="100%"
              colorScheme="cyan"
              color="white"
            >
              Schedules
            </Button>
          </NavLink>
          <NavLink to="/user/doctor/patients">
            <Button
              w="100%"
              colorScheme="cyan"
              color="white"
            >
              Patients History
            </Button>
          </NavLink>
          {/* <NavLink to="/user/doctor/payments">
            <Button w="100%" colorScheme="cyan" color="white">
              Payments
            </Button>
          </NavLink> */}
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
        </Flex>
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
       
      >
        <Header role="doctor" />
<<<<<<< HEAD
        <Outlet />
=======

        <Box overflowY="auto" h="100%">
          <Outlet />
        </Box>
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
      </Grid>
    </Grid>
  );
};

export default DoctorHome;
