import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Container, FormControl, Heading, Input, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    fetch(`http://localhost:8080/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected typo here
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  };

  return (
    <Container maxW="full" backgroundImage={`url("https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80")`} h="110vh">
      <Box w="40%" h="620px" m="auto" bg="whiteAlpha.700" p="50px" borderRadius="20px">
        <Heading color="#3D0C02">Login</Heading>
        <Text color="#3D0C02">For the Purpose of our travel regulation, your details are required.</Text>
        <br />
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <br />
          <FormControl>
            <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <br />
          <Center>
            <Button type="submit" bg='#5865F2'>Login</Button>
          </Center>
        </form>
        <Heading color="#3D0C02">Don't have an account?</Heading>
        {/* <Button>Sign Up</Button> */}
      </Box>
    </Container>
  );
};

export { Login };
