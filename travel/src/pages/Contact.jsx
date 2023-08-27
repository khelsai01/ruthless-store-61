import { Avatar, Box, Button, Card, Checkbox, FormControl,Flex,Spacer, FormLabel, Heading, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import heroSection6 from "../Images/heroSection6.jpeg"
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Box w="60%" m="auto" mt="100px">
      <Heading color="#AA6C39">Contact Us</Heading>
      <br />
      <Text color="#FBE7A1">Contact us and we will give you the best plan for you and your family</Text>
      </Box>
      <br />
      <SimpleGrid columns={{lg:2,md:1,sm:1}} gap={5} w="80%" m="auto">
        <form>
        <FormControl >
          <Input  placeholder='Name'/>
        </FormControl>
        <br />
        <FormControl>
          <Input  placeholder='Email'/>
        </FormControl> 
        <br />
        <FormControl>
          <Input  placeholder='Subject'/>
        </FormControl> 
        <br />
        <FormControl>
          <Input  placeholder='Message'/>
        </FormControl>
        <br />
          <Checkbox />
          <Text color={"#AA6C39"} >I have read and accept the T&C</Text>
          <br />
        <Button type='submit' bg="#A0522D">Submit</Button>
        </form> 
        <Box>
          <Image  src="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/01/Help-desk-support-software-FB.jpg"  borderRadius="20px" />
        </Box>

      </SimpleGrid >
      <br />
      <SimpleGrid columns={{lg:4,md:2,sm:1}} gap={5} w="80%" m="auto">
        <Card p="10px" m="auto" >
          <Avatar src='https://cdn4.vectorstock.com/i/1000x1000/13/83/phone-icon-isolated-on-blue-background-vector-24711383.jpg' />
          <h1>EMERGENCY</h1>
          <Text>+918224812</Text>
        </Card>
        <Card p="10px" m="auto" >
          <Avatar src='https://cdn4.vectorstock.com/i/1000x1000/20/38/white-location-and-address-icon-on-blue-background-vector-7352038.jpg' />
          <h1>LOCATION</h1>
          <Text>Banglore 89 city</Text>
        </Card>
        <Card p="10px" m="auto" >
          <Avatar src='https://cdn4.vectorstock.com/i/1000x1000/66/48/e-mail-icon-with-blue-background-vector-40526648.jpg' />
          <h1>EMAIL</h1>
          <Text>travce_help.com</Text>
        </Card>
        <Card p="10px" m="auto" >
          <Avatar src='https://e7.pngegg.com/pngimages/390/677/png-clipart-blue-clock-icon-service-icon-time-background-blue-angle-thumbnail.png' />
          <h1>WORKING Hrs</h1>
          <Text>mon-Sat</Text>
          <Text>9:30AM To 8:30</Text>
        </Card>
      </SimpleGrid>

      <br />
      <Box w="65%" h={{lg:'40vh',md:"20vh",sm:"20vh"}} p="40px" borderRadius="20px" m="auto" backgroundImage={`url(${heroSection6})`} textAlign="center">
      <Heading color="#EB5406">Subscribe for More Update</Heading>
     
      <h2>Lorem ipsum dolor sit amet consectetur </h2>
      <br />
      <Flex bg="white" borderRadius="20px" p="20px">
        <Text>Lorem ipsum dolor sit amet consectetur</Text>
        <Spacer />
        <Button borderRadius="20px" bg="#804A00" color="#F3E5AB"> Subscribe</Button>
      </Flex>
    </Box>
    </div>
  )
}

export default Contact