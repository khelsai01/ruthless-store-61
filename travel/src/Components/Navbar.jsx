import React from 'react'
import { Container, Flex, Stack, HStack, Spacer, Box, } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

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
  };

  const defaultStyle = {
    textDecoration: 'none',
    // color: 'whitesmoke',
  };
  const navbarStyle = {
    backgroundColor: "#4c4177",
    backgroundImage: "linear-gradient(315deg, #4c4177 0%, #2a5470 74%)"
  }

  return (
    <Container maxW="full" py="15px" style={navbarStyle} >
      <Flex justifyContent="space-around" gap={5} w="lg" >
        {links.map((link) => (
          <Stack key={link.id}>
            <NavLink
              to={link.path}
              style={({ isActive }) =>
                isActive ? activeStyle : defaultStyle
              }
            >
              {link.title}
            </NavLink>
            <Spacer />
          </Stack>
        ))}
        <Spacer />

        <HStack ml="-10px">
          <NavLink to="/cart" style={{ fontSize: '18px' }}>
            Cart
          </NavLink>
        </HStack>
      </Flex>
    </Container>
  );
};

export { Navbar };