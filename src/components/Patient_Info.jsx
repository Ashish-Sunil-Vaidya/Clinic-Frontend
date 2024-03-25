import {
    Button,
    Flex,
    FormLabel,
    Heading, Input, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper, Select
} from "@chakra-ui/react";

function Patient_Info() {
    
    console.log('===  Patient_Info.jsx [13] ===', );
    return(
        <Flex direction='column' bg='cyan.200' width='100%'  p='10px' borderRadius='20px' maxW='900px'>
            <Heading fontSize='25px'>Patient Information</Heading>
                    <FormLabel  >Age:</FormLabel>
                     <NumberInput defaultValue='10' min='1' bg='cyan.100' fontSize={{base:'15px',md:'20px'}} >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                     </NumberInput>
                    <FormLabel  >Weight:</FormLabel>
                     <NumberInput fontSize={{base:'15px',md:'20px'}}  defaultValue='10' min='1' bg='cyan.100'>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                     </NumberInput>
                     <FormLabel  >Gender:</FormLabel>
                            <Select fontSize={{base:'15px',md:'20px'}} placeholder='Select Gender' bg='cyan.100'>
                                <option>Male</option>
                                <option>Female</option>
                            </Select>

                    <FormLabel my='10px' fontSize='20px' mr='10px'>Report:</FormLabel>
                    <FormLabel  >Report 1 :</FormLabel>
                    <Input  type='text' bg='cyan.100' fontSize={{base:'15px',md:'20px'}}  placeholder='Enter Report 1 :'/>
                    <FormLabel  >Report 2 :</FormLabel>
                    <Input type='text' bg='cyan.100' fontSize={{base:'15px',md:'20px'}}  placeholder='Enter Report 2 :'/>

                    <FormLabel   >Created Date:</FormLabel>
                    <Input type='date' bg='cyan.100' fontSize={{base:'15px',md:'20px'}}  placeholder='Enter Created Date :'/>

                    <FormLabel >Last Time:</FormLabel>
                    <Input type='date' bg='cyan.100' fontSize={{base:'15px',md:'20px'}}  placeholder='Enter Last Date :'/>

                    <FormLabel > Is Payment Completed:</FormLabel>
                            <Select fontSize={{base:'15px',md:'20px'}} placeholder='Select Gender' bg='cyan.100'>
                                <option>Yes</option>
                                <option>No</option>
                            </Select>
             <Button mt='10px' width='30vh' type='save' colorScheme='cyan' variant='solid' alignSelf='center' borderRadius='10px'
            >Save</Button>
                </Flex>
    )
}

export default Patient_Info;