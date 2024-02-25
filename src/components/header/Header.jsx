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
} from "@chakra-ui/react";
import logo from "src/assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = ({ role, navlinks }) => {
  const navigate = useNavigate();
  return (
    <>
      {document.body.clientWidth > 500 ? (
        <Flex
          px={8}
          py={2}
          align="center"
          justify="space-between"
          boxShadow="0 0 2px 2px rgba(0,0,0,0.05)"
          borderRadius={10}
          bg="white"
          flexWrap="wrap"
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
            <Box mx={2} fontSize="1.5rem" fontWeight="bold" color="teal.600">
              {role}
            </Box>
          </Flex>
          <Flex gap={10}>
            <Flex align="center" gap={2}>
              {navlinks.map(({ name, path }, index) => {
                console.log(name, path);
                return (
                  <Box key={index} fontSize="1.2rem" fontWeight={600}>
                    <Button
                      color="teal"
                      variant="link"
                      onClick={() => navigate(path)}
                    >
                      {name}
                    </Button>
                  </Box>
                );
              })}
            </Flex>
            <Box>
              <Button colorScheme="red">Logout</Button>
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Accordion allowToggle bg="white" boxShadow="0 0 8px 8px rgb(0,0,0,.1)">
          <AccordionItem border={0}>
            <AccordionButton justifyContent="space-between" color="teal">
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
                  mx={2}
                  fontSize="1.5rem"
                  fontWeight="bold"
                  color="teal.600"
                >
                  {role}
                </Box>
              </Flex>
              <AccordionIcon fontSize="2rem"/>
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
      )}
    </>
  );
};

export default Header;
