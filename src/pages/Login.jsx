// import React, { useState } from 'react';
import {
  Flex,
  Container,
  Image,
  FormControl,
  Heading,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import axios from "axios"
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate  } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

const Login = () => {

  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, setCurrentUser, setExpirationTime } = useContext(GlobalContext);
  const navigator = useNavigate();
  const toast = useToast()

  useEffect(() => {
    if(currentUser) {
      if(currentUser.role === "doctor") navigator("/user/doctor")
      else navigator("/user/receptionist")
    }
  }, [])

  const handleSelected = (value) => {
    setRole(value);
  };

  const loginSubmitHandler = (e) => {
    axios.post("http://localhost:8000/api/v1/users/login", { role: role.toLowerCase(), username, password })
    .then(response => {
      const loggedInUser = response.data.data;
      if(!loggedInUser) seterrMsg("Unable to login user");
      setCurrentUser(loggedInUser);
      setExpirationTime(Date.now() + 7 * 24 * 60 * 60 * 1000);
      toast({
        title: 'Login successfull.',
        description: "You are logged in your account",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      if(loggedInUser?.role === "doctor") navigator("/user/doctor");
      else navigator("/user/receptionist");
    })
    .catch(error => {
      if(error?.response?.status === 400) toast({
          title: 'Login Failed.',
          description: "All feilds are required",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      else if(error?.response?.status === 404) toast({
        title: 'Login Failed.',
        description: "Invalid role choosed",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      else if(error?.response?.status === 409) toast({
        title: 'Login Failed.',
        description: "Incorrect Password",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      else toast({
        title: 'Login Failed.',
        description: "Something went wrong",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    });
  }

  return (
    <>
      
      <Flex
        justifyContent="center"
        direction={{ md: "row", sm: "column", base: "column" }}
        alignItems="center"
        height="100vh"
        gap={{ md: "10%", sm: "1px", base: "0px" }}
        width="100"
        bg="cyan.100"
      >
        <Flex>
          <Container maxW="600px" minW="60px" centerContent>
            <Image
              width={{ md: "100%", sm: "90%", base: "80%" }}
              borderRadius="full"
              src="./src/assets/Logo.png"
              filter="drop-shadow(0px 0px 20px #0bc5ea)"
            ></Image>
          </Container>
        </Flex>
        <Flex
          p="20px"
          width={{ sm: "100%" }}
          justifyContent="center"
          maxW="500px"
        >
          <FormControl
            width={{ sm: "90%", base: "90%" }}
            isRequired
            bgColor="cyan.300"
            borderRadius="40px"
            minW="300px"
            p="25px"
            shadow={"0 0 40px lightgray"}
            maxW="400px"
            onSubmit={loginSubmitHandler}
          >
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Heading color="black.200">Login</Heading>
              <Box my="10px" fontSize="20px">
                User Type
              </Box>
              <RadioGroup defaultValue="">
                <HStack spacing="20px" fontWeight="600">
                  <Radio
                    value="Doctor"
                    onChange={() => handleSelected("Doctor")}
                    selected={role === "Doctor"}
                  >
                    Doctor
                  </Radio>
                  <Radio
                    value="Receptionist"
                    onChange={() => handleSelected("Receptionist")}
                    selected={role === "Receptionist"}
                  >
                    Receptionist
                  </Radio>
                </HStack>
              </RadioGroup>
              <FormLabel my="10px" fontSize="20px">
                Username
              </FormLabel>
              <Input
                type="text"
                rounded="10px"
                bgColor="gray.100"
                fontSize="20px"
                color="black"
                placeholder="Enter your name"
                value={username}
                onChange={e => setUsername(e.target.value)}
              ></Input>
              <FormLabel my="10px" fontSize="20px">
                Password
              </FormLabel>
              <Input
                id={Date.now()}
                type="password"
                rounded="10px"
                bgColor="gray.100"
                fontSize="20px"
                color="black"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></Input>

              <Box my="10px">
                <Button type="submit" colorScheme="cyan" onClick={loginSubmitHandler}>
                  Submit
                </Button>
              </Box>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
