import { Box, Flex } from "@chakra-ui/react";
import Header from "src/components/Header";

const Home = ({ role, navlinks, component }) => {
  const headerProps = {
    role,
    navlinks,
  };
  return (
    <Flex
      max="100%"
      h="100svh"
      px="5%"
      // overflowY="auto"
      bg="cyan.100"
      // gap={3}

      // flexDirection="column"
      display="grid"
      gridTemplateRows="minmax(80px,auto) minmax(0, 1fr)"
    >
      <Header {...headerProps} />
      <Box flex={1}  overflowY="hidden">
        {component}
      </Box>
    </Flex>
  );
};

export default Home;
