import { Box } from "@chakra-ui/react";
function Card({ children }) {
  return (
    <Box
      bgColor="white"
      p={5}
      boxShadow="5px 5px 10px 2px rgb(0,0,0,.05)"
      borderRadius={10}
      display="flex"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}

export default Card;
