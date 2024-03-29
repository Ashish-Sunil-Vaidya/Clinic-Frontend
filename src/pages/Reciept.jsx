import { BrowserRouter, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useToast, Heading } from "@chakra-ui/react";

const Reciept = () => {
  const { id } = useParams();
  const [recieptData, setRecieptData] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const [name, surname] = id.split(" ");
    axios
      .get(`http://localhost:8000/api/v1/users/details/${name}%20${surname}`)
      .then((response) => {
        setRecieptData(response.data.data);
      })
      .catch((error) =>
        toast({
          title: "Unable to fetch Data",
          description: "something went wrong when fetching appointments",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      );
  }, []);

  return <></>;
};

export default Reciept;
