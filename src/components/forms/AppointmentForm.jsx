import {Table, Tr, Th, Td, TableContainer, Input, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, NumberInput, Select, Box, Button, Thead, Heading} from "@chakra-ui/react";

const AppointmentForm = () =>{
    return (
        <>
            <TableContainer boxShadow="0 0 2px 2px rgb(0,0,0,.05)" bg='cyan.100' rounded='20px' p='10px' display='flex' flexDirection='column' alignItems='center'>
          <Heading>Add Appointments</Heading>
          <Table variant="simple" size='sm' colorScheme='blue'>
            <Thead justifyItems='center'></Thead>
            <Tr>
              <Th fontSize='20px'>Name:</Th>
              <Td>
                <Input fontSize='20px' width='60%' type='text' bgColor='gray.100' color='black' placeholder='Enter name' borderRadius='10px'></Input>
              </Td>
            </Tr>
            <Tr>
              <Th fontSize='20px'>Mobile:</Th>
              <Td>
                <Input fontSize='20px' width='60%' type='text' bgColor='gray.100' color='black' placeholder='Enter Mobile no' borderRadius='10px'></Input>
              </Td>
            </Tr>
            <Tr>
              <Th fontSize='20px'>Age:</Th>
              <Td>
                <NumberInput fontSize='20px' width='60%' defaultValue={18} min={1} bgColor='gray.100' color='black' borderRadius='10px'>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
            </Tr>
            <Tr>
              <Th fontSize='20px'>Gender:</Th>
              <Td>
                <Select fontSize='20px' width='60%' placeholder='Select Gender' bgColor='gray.100' color='black' borderRadius='10px'>
                  <option>Male</option>
                  <option>Female</option>
                </Select>
              </Td>
            </Tr>
            <tr>
              <Th fontSize='20px'>Date:</Th>
              <Td>
                <Input fontSize='20px' width='60%' placeholder="Select Date" size="md" type="date" bgColor='gray.100' color='black' borderRadius='10px'/>
              </Td>
            </tr>
            <Tr>
              <Th fontSize='20px'>Visited:</Th>
              <Td>
                <Select fontSize='20px' width='60%' placeholder='Is visited ' bgColor='gray.100' color='black' borderRadius='10px'>
                  <option>Yes</option>
                  <option>No</option>
                </Select>
              </Td>
            </Tr>
            <Tr centerContant>
              <Th fontSize='20px' align='center'>

                </Th>
            </Tr>
          </Table>
           <Button width='150px' type='submit' colorScheme='blue'>Submit</Button>
        </TableContainer>
        </>
    )
}

export default AppointmentForm;
