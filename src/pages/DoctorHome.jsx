import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
const DoctorHome = () => {
  const {
    currentUser,
    setCurrentUser,
    expirationTime,
    activeTab,
    setActiveTab,
  } = useContext(GlobalContext);
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
      bgColor="cyan.400"
    >
      <Box
        zIndex={2}
        display={{
          base: "none",
          lg: "block",
          xl: "block",
          md: "block",
        }}
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
        <Flex direction="column">
          {tabs.map((tab, index) => (
            <NavLink to={tab.path} key={index}>
              <Box
                p={3}
                w="100%"
                variant="outline"
                textAlign="center"
                fontWeight={600}
                fontSize="1.2rem"
                color={activeTab === tab.name ? "cyan.500" : "white"}
                onClick={() => setActiveTab(tab.name)}
                bgColor={activeTab === tab.name ? "white" : "transparent"}
              >
                {tab.name}
              </Box>
            </NavLink>
          ))}
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
        bgColor="white"
      >
        <Header role="doctor" />

        <Box overflowY="auto" h="100%">
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DoctorHome;
