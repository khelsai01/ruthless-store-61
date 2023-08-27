import { Box, Heading, Text, VStack, Avatar, SimpleGrid, Spacer } from '@chakra-ui/react'
import React from 'react'
import heroSection2 from "../Images/heroSection2.jpeg"
import HeroSection from '../Components/HeroSection'

const Abouts = () => {
  return (
    <div style={{ color: "whitesmoke" }}>
      <HeroSection />

      <div style={{ width: "80%", margin: "auto" }}>
        <Heading color={"whitesmoke"}>ABOUT THE TRAVEL</Heading>
        <Text >THE TRAVEL is a startup Destination Management Company having experienced and enthusiast management. We aim to set a new boarder for your travel experience that's what our company name – THE DESTINATION depicts.</Text>
        <br />
        <Text>Our Aim is to transforming the tourism into a balanced package of offering best value for money to our customers and also detailed 360 degree information about the exotic and most popular destinations, which we promote and recommend to you. We’re committed to provide not only hassle free travel solutions but also high-end itinerary services to our clients and we take pride to exceeding your experiences.</Text>
      </div>
      <br />


      <Box Box position="relative" width="100%" height="500px" my={"100px"} backgroundImage={`url(${heroSection2})`}>
        <VStack w="80%" m="auto" color={"#EB5406"} >
          <Box mt="100px" >

          <Heading >OUR VISION AND AIM</Heading>
          <Text bg={"whiteAlpha.700"} fontSize={"20px"} p="20px" borderRadius={"10px"}>To establishing our team as the best service provider <br /> through their knowledge and in-depth research.  We aim <br />to cater all your tourism and itinerary requirements including <br /> new ideas and suggestions to visit the most popular destinations,<br /> which will become a lifetime memoire.
          <br />
            We open up before you a wide range of holiday and business <br />solutions/options and specialize in creating tailor made packages to<br /> exactly fit into each individual’s need.</Text>
          </Box>
        </VStack>
      </Box>
      <VStack w="80%" m="auto" >
        <Heading>WHY CHOOSE US</Heading>
        <br />
        <SimpleGrid columns={{lg:4,md:2,sm:1}} gap={4} margin={"auto"}  mt="100px">
          <Box>
          <Avatar  src='https://cdn-icons-png.flaticon.com/512/4102/4102964.png' />
          <h2 style={{color:"#BCB88A"}}>Qualty services</h2>
          <Text>Experience team having experties to plan you trip in a proper and professional way. Just let us know your length of stay and month. We will serve you with the best possible ltinerary and package.</Text>
          </Box>
          <Box>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtE_NzcOoCL8Xk4LOruLNBB-f8NLGKpY3fmBm-DUlfK2bn3kke6h8Nel_LCh4w94yM-Xs&usqp=CAU' />
          <h2 style={{color:"#BCB88A"}}>Clint stisfaction</h2>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum? Corrupti dolore recusandae ab ratione? Vitae repellat id nesciunt corrupti, quas ex est animi recusandae non obcaecati esse velit asperiores.</Text>
          </Box>
          <Box>
          <Avatar  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWxLFSR-16kL86KgQz683z9GNYQFH0a9ZlGgzQ2eCGZkKdtfrswXk1Qxc4PkFLwg1StI&usqp=CAU'/>
          <h2 style={{color:"#BCB88A"}}>Flexible & easy to approach</h2>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti consectetur aliquid soluta quo architecto, natus deserunt in maxime? Mollitia minima qui natus perspiciatis iste amet cumque aut illum nostrum.</Text>
          </Box>
          <Box>
          <Avatar src='https://w7.pngwing.com/pngs/344/147/png-transparent-computer-icons-technical-support-help-miscellaneous-blue-text.png' />
          <h2 style={{color:"#BCB88A"}}>24X7 Pesponse</h2>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni, delectus ullam in exercitationem reiciendis suscipit repudiandae velit odio iste aliquid a sed expedita, vel perspiciatis veritatis officia consectetur. Pariatur..</Text>
          </Box>
        </SimpleGrid>
      </VStack>

    </div>
  )
}

export default Abouts