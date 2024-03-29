import {
  Grid,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Avatar,
} from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios"
import { Spinner } from '@chakra-ui/react'
const ProfileForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    mobile_no: "",
    email: "",
    password: "",
    role: ""
  });

  const [isChanged, setIsChanged] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const { currentUser, setCurrentUser, expirationTime } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (!currentUser) toast({
      title: 'Unauthorized request',
      description: "Login to access this page",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    else if (Date.now() > expirationTime) {
      setCurrentUser(null);
      navigator("/login")
    }
    else {
      setFormData({
        username: currentUser.username,
        fullname: currentUser.fullname,
        mobile_no: currentUser.mobile_no,
        email: currentUser.email
      })
      setAvatarUrl(currentUser.avatar);
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsChanged(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChanged == false) {
      toast({
        title: 'Bad request',
        description: "Change some details for updating your profile",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      axios.post("http://localhost:8000/api/v1/users/updateProfile", { ...formData, role: currentUser.role })
        .then(response => {
          toast({
            title: 'Updated Successfully',
            description: "Your profile updated successfully.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          setCurrentUser(response?.data?.data);
        })
        .catch(error => {
          if (error.response.status == 400) toast({
            title: 'Error',
            description: "All fields are required.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
          else toast({
            title: 'Server error',
            description: "Something went wrong.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
    }
  };
  // http://localhost:5173/edit-profile
  const handleAvatarChange = () => {
    setIsLoading(true);
    const profileData = new FormData();
    profileData.set("avatar", avatar)
    axios.post(`http://localhost:8000/api/v1/users/changeAvatar`, profileData)
      .then(res => {
        setAvatarUrl(res.data.data.avatar);
        setIsLoading(false);
        toast({
          title: 'Updated Successfully',
          description: "Avatar updated successfully.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        setCurrentUser(res.data.data);
        setAvatar(null);
      })
      .catch(err => {
        setIsLoading(false);
        if (avatar && err.response.status == 400) toast({
          title: 'Server error',
          description: "Something went wrong.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        else toast({
          title: 'Bad request',
          description: "Select picture to set avatar",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        setAvatarUrl(currentUser.avatar)
      })
  }

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
          src={avatarUrl}
        />
        <Input
          type="file"
          opacity={0}
          onChange={(e) => {
            setAvatar(e.target.files[0])
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
          }}
          position="absolute"
          width="100%"
          height="100%"
        />
        {avatar && <>
          <Button
            colorScheme='teal'
            variant='outline'
            w="100%" onClick={handleAvatarChange}
          >
            Upload
            {isLoading && <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='md'
            />}
          </Button>
          <Button w="100%" colorScheme="red" onClick={() => setAvatarUrl(currentUser?.avatar)}>
            Cancel
          </Button>
        </>
        }
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
          <FormLabel m={0}>Role</FormLabel>
          <Input
            type="text"
            name="username"
            value={currentUser.role.toUpperCase()}
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
        <Button type="submit"
        >Update Profile</Button>
      </Flex>


    </Grid>
  );
};

export default ProfileForm;
