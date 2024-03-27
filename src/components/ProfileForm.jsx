import { useState } from "react";
import {
  Grid,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Avatar,
} from "@chakra-ui/react";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    username: "receptionist",
    fullname: "Ashish Vaidya",
    mobile_no: "9701234568",
    email: "name2@gmail.com",
    password: "nschanged",
  });

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("=== avatar ProfileForm.jsx [36] ===", avatar);

  return (
    <Grid templateColumns="30% 70%" h="100svh">
      <FormControl
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        px={10}
        gap={3}
      >
        <FormLabel fontSize="2xl">Profile Picture</FormLabel>
        <Avatar
          width="250px"
          height="250px"
          src={avatar}
        />
        <Input
          type="file"
          opacity={0}
          onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))}
          position="absolute"
          width="100%"
          height="100%"
        />
        {avatar && (
          <Button w="100%" colorScheme="red" onClick={() => setAvatar(null)}>
            Cancel
          </Button>
        )}
      </FormControl>

      <Flex
        direction="column"
        as="form"
        onSubmit={handleSubmit}
        gap={3}
        p="10%"
      >
        <FormControl>
          <FormLabel m={0}>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel m={0}>Full Name</FormLabel>
          <Input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel m={0}>Mobile Number</FormLabel>
          <Input
            type="text"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
          />
        </FormControl>



        <FormControl>
          <FormLabel m={0}>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel m={0}>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>

        <Button type="submit">Update Profile</Button>
      </Flex>
    </Grid>
  );
};

export default ProfileForm;
