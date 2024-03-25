import {
  Button,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
function Prescriptions() {
  const [count, setcount] = useState(2);
  const [count_symptoms, setcount_symptoms] = useState(2);
  const [medArr, setMedArr] = useState([]);
  const [symArr, setSymArr] = useState([]);
  // function Add_Medicine (){
  //     setcount(count+1);
  //     var Medicine = document.getElementById('Medicine');
  //     var Flex = document.createElement('Flex');
  //     Flex.direction={md:'row', sm:'column' ,base:'column'};
  //     Flex.gap='5px';
  //     var FormLabel = document.createElement('FormLabel');
  //     var Input1 = document.createElement('Input');
  //     Input1.fontSize={base:'15px',md:'20px'};
  //     Input1.type='text';
  //     Input1.bg='teal.100';
  //     Input1.placeholder='Enter Medicine name :';
  //     var Input2 = document.createElement('Input');
  //     Input2.fontSize={base:'15px',md:'20px'};
  //     Input2.type='text';
  //     Input2.bg='teal.100';
  //     Input2.placeholder='Dose';
  //     FormLabel.textContent='Medicine: '+count;
  //     Flex.appendChild(FormLabel);
  //     Flex.appendChild(Input1);
  //     Flex.appendChild(Input2);
  //     Medicine.appendChild(Flex);
  // }

  // function Add (){
  // return(
  //     <Flex gap='5px' direction={{md:'row', sm:'column' ,base:'column'}}>
  //     <FormLabel >Medicine-{count}</FormLabel>
  //         <Input fontSize={{base:'15px',md:'20px'}} type='text' bg='teal.100' placeholder='Enter Medicine name :'/>
  //         <Input fontSize={{base:'15px',md:'20px'}} type='text' bg='teal.100' placeholder='Dose'/>
  //     </Flex>
  // )
  // }
  function Add_Medicine() {
    setcount(count + 1);
    // const Medicine = document.getElementById("Medicine");
    // Medicine.appendChild(
    <Flex gap="5px" direction={{ md: "row", sm: "column", base: "column" }}>
      <FormLabel fontSize={{ base: "15px", md: "20px" }}>{count}</FormLabel>
      <Input
        fontSize={{ base: "15px", md: "20px" }}
        type="text"
        bg="cyan.100"
        placeholder="Enter Medicine name :"
      />
      <Input
        fontSize={{ base: "15px", md: "20px" }}
        type="text"
        bg="cyan.100"
        placeholder="Dose"
      />
    </Flex>;
    // );
    setMedArr([
      ...medArr,
      <Flex
        key={count}
        gap="5px"
        direction={{ md: "row", sm: "column", base: "column" }}
      >
        <FormLabel fontSize={{ base: "15px", md: "20px" }}>{count}</FormLabel>
        <Input
          fontSize={{ base: "15px", md: "20px" }}
          type="text"
          bg="cyan.100"
          placeholder="Enter Medicine name :"
        />
        <Input
          fontSize={{ base: "15px", md: "20px" }}
          type="text"
          bg="cyan.100"
          placeholder="Dose"
        />
      </Flex>,
    ]);
  }
  function Add_Symptoms() {
    setcount_symptoms(count_symptoms + 1);

    setSymArr([
      ...symArr,
      <Flex
        key={count_symptoms}
        gap="5px"
        direction={{ md: "row", sm: "column", base: "column" }}
      >
        <FormLabel fontSize={{ base: "15px", md: "20px" }}>
          {count_symptoms}
        </FormLabel>
        <Input
          fontSize={{ base: "15px", md: "20px" }}
          type="text"
          bg="teal.100"
          placeholder="Enter Symptoms name :"
        />
      </Flex>,
    ]);
  }
  return (
    <Flex direction="column" width="100%" p="10px" gap="10px" maxW="1000px">
      <Flex
        direction="column"
        bg="cyan.200"
        width="100%"
        p="10px"
        borderRadius="20px"
        id="Medicine"
      >
        <Heading fontSize="25px">Prescription</Heading>
        <FormLabel> Medicines : </FormLabel>
        <Flex
          gap="5px"
          direction={{ md: "row", sm: "column", base: "column" }}
          justifyItems="center"
        >
          <FormLabel fontSize={{ base: "15px", md: "20px" }}> 1 </FormLabel>
          <Input
            fontSize={{ base: "15px", md: "20px" }}
            type="text"
            bg="cyan.100"
            placeholder="Enter Medicine name :"
          />
          <Input
            fontSize={{ base: "15px", md: "20px" }}
            type="text"
            bg="cyan.100"
            placeholder="Dose"
          />
        </Flex>
        <Grid>{medArr.map((med) => med)}</Grid>
        <Button
          margin={"10px"}
          leftIcon={<AddIcon />}
          colorScheme="cyan"
          variant="solid"
          onClick={Add_Medicine}
        >
          Add Medicine
        </Button>
      </Flex>

      <Flex
        direction="column"
        bg="cyan.200"
        width="100%"
        p="10px"
        borderRadius="20px"
        id="Symptoms"
      >
        <Heading fontSize="25px">Symptoms</Heading>
        <FormLabel>Symptoms:</FormLabel>
        <Flex gap="5px" direction={{ md: "row", sm: "column", base: "column" }}>
          <FormLabel fontSize={{ base: "15px", md: "20px" }}> 1 </FormLabel>
          <Input
            fontSize={{ base: "15px", md: "20px" }}
            type="text"
            bg="cyan.100"
            placeholder="Enter Symptoms name :"
          />
        </Flex>
        {symArr.map((sym) => sym)}
        <Button
          margin={"10px"}
          leftIcon={<AddIcon />}
          colorScheme="cyan"
          variant="solid"
          onClick={Add_Symptoms}
        >
          Add Symptoms
        </Button>
      </Flex>
      <Button
        mt="10px"
        width="30vh"
        type="save"
        colorScheme="cyan"
        variant="solid"
        alignSelf="center"
        borderRadius="10px"
      >
        Save
      </Button>
    </Flex>
  );
}

export default Prescriptions;
