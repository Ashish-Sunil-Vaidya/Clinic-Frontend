import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const ResetPassword = () => {
  return (
    <>
      <Box maxW="md" mx="auto" mt={8} p={4}>
        <FormControl>
          <FormLabel>Old Password</FormLabel>
          <Input type="password" placeholder="Enter old password" />
        </FormControl>
        <FormControl>
          <FormLabel>New Password</FormLabel>
          <Input type="password" placeholder="Enter new password" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" placeholder="Confirm new password" />
        </FormControl>
        <Button mt={4} colorScheme="blue">
          Reset Password
        </Button>
      </Box>
    </>
  );
};

export default ResetPassword;
