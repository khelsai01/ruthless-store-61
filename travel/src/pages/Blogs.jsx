import { Box ,Button,SimpleGrid,Text,Image, Heading, Flex, Spacer} from '@chakra-ui/react'
import React from 'react'
import dubai from "../Images/dubai.jpg"
import heroSection3 from "../Images/heroSection3.jpeg"
import Shimla from "../Images/Shimla.jpg"
import heroSection6 from "../Images/heroSection6.jpeg"



const Blogs = () => {
  return <div>
    <Box color={"#F3E3C3"} w={"70%"} m={"auto"} mt={"100px"} >
      <Heading>Blogs</Heading>
      <Text my={3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat officia odit doloremque voluptas ab veritatis dolore alias fuga totam sint libero consequuntur iste nobis, eaque debitis harum aperiam earum labore!</Text>
      <Button borderRadius={"20px"} bg={"gold"}>Learn More</Button>
    </Box>
    <br />
    <SimpleGrid columns={{lg:2,md:1,sm:1}} gap={5} m="auto"my={5} w="70%" color="#F3E3C3">
      <Box>
        <Heading>Find Best place for you</Heading>
        <br />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam minima porro asperiores quasi atque, explicabo tempore totam ipsa doloribus? Optio quis distinctio ex sapiente quidem nam nostrum totam pariatur?</Text>
        <br />
      </Box>
      <Box>
        <Image src={dubai} align="blogs" borderRadius="20px" />
      </Box>

    </SimpleGrid>
    <br />
    <SimpleGrid columns={{lg:2,md:1,sm:1}} gap={5} m="auto"my={5} w="70%" color="#F3E3C3">
    <Box>
        <Image src={heroSection3} align="blogs" borderRadius="20px" />
      </Box>
      <Box>
        <Heading>Find Best place for you</Heading>
        <br />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam minima porro asperiores quasi atque, explicabo tempore totam ipsa doloribus? Optio quis distinctio ex sapiente quidem nam nostrum totam pariatur?</Text>
        <br />
      </Box>
    </SimpleGrid>
    <br />
    <SimpleGrid columns={{lg:2,md:1,sm:1}} gap={5} m="auto"my={5} w="70%" color="#F3E3C3">
      <Box>
        <Heading>We offer the Best</Heading>
        <br />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam minima porro asperiores quasi atque, explicabo tempore totam ipsa doloribus? Optio quis distinctio ex sapiente quidem nam nostrum totam pariatur?</Text>
        <br />
      </Box>
      <Box>
        <Image src={Shimla} align="blogs" borderRadius="20px" />
      </Box>

    </SimpleGrid>

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
}

export default Blogs