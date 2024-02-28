// Chakra imports
import {
  Flex,
  Icon,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "./Card";
import CardBody from "./CardBody";


const MiniStatistics = ({ title, amount, percentage, icon }) => {

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minH="83px">
      <CardBody>
        <Flex flexDirection="row" align="center" justify="center" w="100%">
          <Stat me="auto">
            <StatLabel
              fontSize="sm"
              color="gray.400"
              fontWeight="bold"
              pb=".1rem"
            >
              {title}
            </StatLabel>
            <Flex>
              <StatNumber fontSize="lg" color={textColor}>
                {amount}
              </StatNumber>
              <StatHelpText
                alignSelf="flex-end"
                justifySelf="flex-end"
                m="0px"
                color={percentage > 0 ? "green.400" : "red.400"}
                fontWeight="bold"
                ps="3px"
                fontSize="md"
              >
                {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
              </StatHelpText>
            </Flex>
          </Stat>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniStatistics;
