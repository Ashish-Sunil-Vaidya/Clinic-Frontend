import {
  Flex,
  Divider,
  Button,
  Box,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Avatar,
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
axios.defaults.withCredentials = true;
const Header = ({ tabValue, setTabValue, role }) => {
  const { currentUser, setCurrentUser, setExpirationTime } = useContext(GlobalContext);
  const navigator = useNavigate();
  const toast = useToast()

  const handleLogout = () => {
    axios.post("http://localhost:8000/api/v1/users/logout", { credentials: 'include' })
    .then(response => {
      setCurrentUser(null);
      setExpirationTime(0);
      toast({
        title: 'Logout successfull.',
        description: "You are logged out from your account",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigator("/");
    })
    .catch(error => {
      toast({
        title: 'Logout Failed.',
        description: "Unauthorized request",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    })
  }
  return (
    <>
      <Box>
        <Flex
          w="100%"
          align="center"
          justify="space-between"
          py={4}
          gap={8}
          display={{
            base: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          }}
        >
          <Box color="cyan.600" fontWeight="bolder" fontSize="1.2rem">
            {tabValue}
          </Box>
          <Flex gap={10}>
            <Flex align="center">
              <Avatar boxSize="40px" />
              <Box ml={2} fontSize="1.1rem" color="cyan.600">
                {currentUser?.fullname}
              </Box>
            </Flex>
            <Button colorScheme="red"
            onClick={handleLogout}
            >Logout</Button>
          </Flex>
        </Flex>
        <Divider orientation="horizontal" borderWidth={1} />
      </Box>
      <Accordion
        allowToggle
        bgColor="white"
        boxShadow="0 0 2px 2px rgb(0,0,0,.05)"
        display={{ base: "block", md: "none", lg: "none", xl: "none" }}
      >
        <AccordionItem border={0}>
          <AccordionButton justifyContent="space-between" px={6} py={3}>
            <Flex alignItems="center">
              <Image
                boxSize="60px"
                objectFit="cover"
                src={logo}
                alt="Code Surgery Squad"
                borderRadius="50%"
              />
              <Box mx={2} fontSize="1rem" fontWeight="bold" color="cyan.600">
                <strong>{tabValue}</strong>
              </Box>
            </Flex>
            <Box color="cyan.600">
              <FaBars fontSize="1.5rem" />
            </Box>
          </AccordionButton>

          <AccordionPanel>
            <Flex direction="column" gap={2}>
              <Flex
                alignSelf="center"
                rounded="full"
                justify="center"
                w="100%"
                align="center"
                p="3"
                bgColor="cyan.50"
              >
                <Avatar boxSize="40px" />
                <Box ml={2} fontSize="1.1rem" color="cyan.600">
                  {currentUser?.role}
                </Box>
              </Flex>
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
              <Button colorScheme="red">Logout</Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Header;
