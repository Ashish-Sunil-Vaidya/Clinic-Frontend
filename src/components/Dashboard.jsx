import { Box, Divider, Flex, SimpleGrid } from "@chakra-ui/react";

const Dashboard = () => {
  const patientInformation = [
    {
      title: "Today's Patient Count",
      count: 10,
    },
    {
      title: "Weekly Patient Count",
      count: 50,
    },
    {
      title: "Monthly Patient Count",
      count: 200,
    },
  ];

  const revenueInformation = [
    {
      title: "Today's Revenue",
      count: 10000,
    },
    {
      title: "Weekly Revenue",
      count: 50000,
    },
    {
      title: "Monthly Revenue",
      count: 200000,
    },
  ];
  return (
    <SimpleGrid
      gap={3}
      columns={{xl:3, md:2}}
      h="100%"
      p={10}
    >
      {/* <Box fontSize="2rem">Patient Information</Box>
        <Divider mb={3} /> */}

      {patientInformation.map((info, index) => {
        return (
          <Flex
            key={index}
            flex="1"
            bgColor="cyan.50"
            p={5}
            rounded="md"
            direction="column"
            justify="center"
    
          >
            <Box fontSize="1.5rem" color="cyan.600" textAlign="center">
              {info.title}
            </Box>
            <Box
              fontSize="2rem"
              fontWeight="bold"
              color="cyan.600"
              textAlign="center"
            >
              {info.count}
            </Box>
          </Flex>
        );
      })}

      {/* <Box fontSize="2rem">Patient Information</Box>
        <Divider mb={3} /> */}

      {revenueInformation.map((info, index) => {
        return (
          <Flex
          
            key={index}
            flex="1"
            bgColor="cyan.50"
            p={5}
            rounded="md"
            direction="column"
            justify="center"
          >
            <Box fontSize="1.5rem" color="cyan.600" textAlign="center">
              {info.title}
            </Box>
            <Box
              fontSize="2rem"
              fontWeight="bold"
              color="cyan.600"
              textAlign="center"
            >
              {info.count}
            </Box>
          </Flex>
        );
      })}

      <Flex
        bgColor="cyan.50"
        p={5}
        rounded="md"
        direction="column"
        justify="center"

      >
        <Box fontSize="1.5rem" color="cyan.600" textAlign="center">
          Average Appointments
        </Box>
        <Box
          fontSize="2rem"
          fontWeight="bold"
          color="cyan.600"
          textAlign="center"
        >
          45
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default Dashboard;
