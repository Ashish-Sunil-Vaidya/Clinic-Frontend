import { Box, Button, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Flex p={4} justify="space-between">
        <Flex
          align="center"
          color="cyan.500"
          gap={2}
          fontSize="1.2rem"
          fontWeight="bolder"
        >
          <Image boxSize="50px" src={logo} />
          Dr. Sunil Vaidya's Clinic
        </Flex>
        <Flex>
          <NavLink
            to="/login"
          >
            <Button colorScheme="cyan" color="white">Login</Button>
          </NavLink>
        </Flex>
      </Flex>
    </>
  );
};

export default LandingPage;
