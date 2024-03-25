import  {Flex, Input, Tabs, TabList, Tab, TabPanels, TabPanel} from "@chakra-ui/react";
import Patient_Info from "./Patient_Info.jsx";
import Prescriptions from "./Prescriptions.jsx";
import Billing_Info from "./Add_Billing_Info.jsx";


function Patient_Detail(){
    
    return (
        <Flex direction='column' bg='teal.100' minH='100vh' width='100vw'>
            <Flex direction={{md:'row', sm:'column' ,base:'column'}} bg='teal.100' p='10px' gap='10px' alignItems='center'>
                <Flex height='100%' width='100%' direction='column'  p='10px' justifyItems='center'>
                    <Input textColor='teal.800' bg='cyan.50' fontSize='30px'  type='text' placeholder='Name Surname'/>
                </Flex>
                <Flex height='100%'  width='100%' direction='column'  p='10px'>
                    <Input textColor='teal.800' bg='cyan.50' fontSize='20px' type='text' placeholder='Mobile'/>
                    <Input textColor='teal.800' bg='cyan.50' fontSize='20px' type='email' placeholder='Email'/>
                </Flex>
            </Flex>
             <Tabs variant='enclosed' align='center'>
              <TabList >
                  <Tab fontSize='20px' fontWeight='500' color='teal.800' _selected={{ color: 'white', bg: 'teal.400' }}>Patient Details</Tab>
                  <Tab fontSize='20px' fontWeight='500' color='teal.800' _selected={{ color: 'white', bg: 'teal.400' }}>Prescriptions</Tab>
                  <Tab fontSize='20px' fontWeight='500' color='teal.800'  _selected={{ color: 'white', bg: 'teal.400' }}>Billing Details</Tab>
              </TabList>
              <TabPanels bg='teal.400'>
                <TabPanel>
                    <Flex justifyContent='center'>
                   <Patient_Info />
                    </Flex>
                </TabPanel>
                <TabPanel>
                    <Flex justifyContent='center'>
                    <Prescriptions/>
                    </Flex>
                </TabPanel>
                  <TabPanel>
                      <Flex justifyContent='center'>
                  <Billing_Info/>
                        </Flex>
                  </TabPanel>
              </TabPanels>
            </Tabs>
         </Flex>
    )
}

export default Patient_Detail;