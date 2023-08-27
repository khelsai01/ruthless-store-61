import React from 'react'
import {Box,Button,Center,Container, FormControl, Heading, Input, Text} from "@chakra-ui/react"
import SignUp from './SignUp'
import {useNavigate} from "react"


const Login = () => {

  return <Container maxW="full" backgroundImage={`url("https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80")`} h="110vh">

    <Box w="40%" h="620px" m="auto" bg="whiteAlpha.700" p="50px" borderRadius="20px"  > 
      <Heading color="#3D0C02">
        Login
      </Heading>
      <Text color="#3D0C02">For the  Purpose of our travel regulation, your details are required.</Text>
      <br/>
      

    <form>
      <FormControl>
        <Input  type="email" placeholder='Email'/>
      </FormControl>
      <br />
      <FormControl>
        <Input type='password' placeholder='Password'  />
      </FormControl>
      <br />
      <Center>

      <Button bg='#5865F2'>Login</Button>
      </Center>
    </form>
    <Heading color="#3D0C02">Don't have account?
    </Heading>
    {/* <Button>Sign Up</Button> */}
    </Box>
  </Container>
}

export  {Login}