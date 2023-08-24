import React from 'react'
import { Container, Flex, VStack, HStack, Spacer, Box,} from "@chakra-ui/react"
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
    textDecoration: "none",
    color: "orange"
  }

  const DefaultStyle = {
    textDecoration: "none",
    // color:"whitesmoke"
  }
  return (
    <Container maxW="container.lx" border="2px solid red" bg={"teal.200"} >
      <Flex justifyContent="space-around" gap={5} w={"lg"} >
        {links.map((link) =>
          <VStack>
            <NavLink key={link.id} to={link.path} style={
              ({ isActive }) => { return isActive ? activeStyle : DefaultStyle }}
            >{link.title}</NavLink>
          </VStack>
        )}
        <Spacer />
        <HStack>
          <NavLink to="/cart" style={{ size: "18px" }}>Cart</NavLink>

        </HStack>
      </Flex>
    </Container>
  )
}

export { Navbar }

