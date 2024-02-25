import { Box, Flex } from "@chakra-ui/react";
import Header from "src/components/header/Header";

const Home = ({ role, navlinks, component }) => {
  const headerProps = {
    role,
    navlinks,
  };
  return (
    <Flex
      w="100%"
      h="100svh"
      // overflowY="auto"
      bg="#F8F8F8"
      // gap={3}
      
      // flexDirection="column"
      display="grid"
      gridTemplateRows="80px calc(100svh - 80px)"
    >
      <Header {...headerProps} />
      <Box flex={1} p={3} overflowY="hidden">{component}</Box>
    </Flex>
  );
};

export default Home;
