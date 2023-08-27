import React from 'react'
import { Container, Image, Flex,Center, HStack, Spacer, Box, Stack, Button, } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import travel from "../Images/travel.png"

const Navbar = () => {

  const links = [
    {
      id: 1,
      title: "Home",
      path: "/"
    },

    {
      id: 2,
      title: "Destination",
      path: "/destination"
    },
    {
      id: 3,
      title: "Blogs",
      path: "/blogs"
    },
    {
      id: 4,
      title: "Abouts",
      path: "/about"
    },
    {
      id: 5,
      title: "Contact",
      path: "/contact"
    },
    {
      id: 6,
      title: "Login",
      path: "/login"
    },

  ];

  const activeStyle = {
    textDecoration: 'none',
    color: 'orange',
    fontSize:"20px",
    fontVariant: "small-caps"
  };

  const defaultStyle = {
    textDecoration: 'none',
    fontSize:"20px",
    fontVariant: "small-caps"
   
    
  };
  const navbarStyle = {
    backgroundColor: "#4c4177",
    backgroundImage: "linear-gradient(315deg, #4c4177 0%, #2a5470 74%)"
  }

  return (
    <Center maxW="full" bg="white">
       <NavLink to="/" >
          <Image src={travel} w="100px" alt="travel" />
        </NavLink>
        
      <Flex justifyContent="space-between" gap="40px"ml="600px" maxW="container.lg"   >
        {links.map((link) => (
          <Center key={link.id} >
            <Box>
              <NavLink
                to={link.path} 
              
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                {link.title}
              </NavLink>
            </Box>

          </Center>
        ))}
        <Spacer />

        <HStack ml="-10px">
         
          {/* <NavLink to="/cart" style={{ fontSize: '18px' }}>
            Cart
          </NavLink> */}
        </HStack>
      </Flex>
    </Center>
  );
};

export { Navbar };