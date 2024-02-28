import { useState, useEffect } from "react";
import {
  Flex,
  Link,
  Button,
  Box,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
} from "@chakra-ui/react";
import logo from "src/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { useGlobalContext } from "src/context/GlobalContext";

const Header = ({ role, navlinks }) => {
  const navigate = useNavigate();
  const { isMobile, setIsMobile,tabValue } = useGlobalContext();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(document.body.clientWidth <= 500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <Accordion
          allowToggle
          bg="white"
          boxShadow="0 0 2px 2px rgb(0,0,0,.05)"
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
                  Dashboard / <strong>{tabValue}</strong>
                </Box>
              </Flex>
              <FaBars fontSize="1.5rem" />
            </AccordionButton>

            <AccordionPanel>
              <Flex direction="column" gap={2}>
                {navlinks.map(({ name, path }, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => {
                        navigate(path);
                      }}
                    >
                      {name}
                    </Button>
                  );
                })}
                <Button colorScheme="red">Logout</Button>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <Box px={3} pt={3}>
          <Flex
            h="100%"
            align="center"
            justify="space-between"
            flexWrap="wrap"
            p={3}
          >
            <Flex alignItems="center">
              <Image
                boxSize="60px"
                objectFit="cover"
                src={logo}
                alt="Code Surgery Squad"
                bg="white"
                borderRadius="50%"
                p={1}
              />
              <Box
                bg="white"
                borderRadius={9999}
                mx={2}
                p={3}                
                fontSize="1.1rem"
                color="cyan.600"
              >
                Dashboard / <strong>{tabValue}</strong>
              </Box>
            </Flex>
            <Flex gap={10} alignItems="center">
              <Flex
                alignItems="center"
                gap={2}
                color="cyan.600"
                fontSize="1.2rem"
                bg="white"
                borderRadius={9999}
                p={2}
                pr={2}
              >
                <Icon
                  as={role === "Doctor" ? FaUserDoctor : RiCustomerService2Fill}
                  color="white"
                  bgColor="cyan.600"
                  boxSize={9}
                  p={1}
                  borderRadius="50%"
                />
                {role === "Doctor" ? "Doctor" : "Receptionist"}
              </Flex>
              <Box>
                <Button colorScheme="red">Logout</Button>
              </Box>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Header;
