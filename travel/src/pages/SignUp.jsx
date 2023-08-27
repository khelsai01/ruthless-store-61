import { Box,Button,Container, FormControl, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const SignUp = () => {
  return <Container maxW="full" backgroundImage={`url("https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80")`} h="110vh">
    <Box w="40%" h="620px" m="auto" bg="whiteAlpha.700" p="50px" borderRadius="20px" >
      <Heading color="#3D0C02">
        Sign Up
      </Heading>
      <Text color="#3D0C02">For the  Purpose of our travel regulation, your details are required.</Text>
    <form>
    <FormControl>
        <Input  type="text" placeholder='First Name'/>
      </FormControl>
      <br />
      <FormControl>
        <Input  type="Ttext" placeholder='Last Name'/>
      </FormControl>
      <br />
      <FormControl>
        <Input  type="email" placeholder='Email'/>
      </FormControl>
      <br />
      <FormControl>
        <Input type='password' placeholder='Password'  />
      </FormControl>
      <br />
      <Button bg='#5865F2'>Sign Up</Button>
    </form>
    
    </Box>
    <Box>

    </Box>
  </Container>
   
  
}

export default SignUp