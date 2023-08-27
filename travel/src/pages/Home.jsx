import {
  Box, Flex,
  Image,
  Text,
  Center,
  FormControl,
  Input,
  Select,
  SimpleGrid,
  FormLabel,
  Stack,
  Heading,
  VStack,
  IconButton ,
  Card,
  Button
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import bg from "../Images/bg.jpg"
import axios from "axios"
import HeroSection from '../Components/HeroSection'
import { useNavigate } from 'react-router-dom'
import { cardStyle } from './Card'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';


import dubai from "../Images/dubai.jpg"
import dubai1 from "../Images/dubai1.jpg"
import heroSection1 from "../Images/heroSection1.jpeg"
import heroSection2 from "../Images/heroSection2.jpeg"
import heroSection3 from "../Images/heroSection3.jpeg"
import heroSection4 from "../Images/heroSection4.jpeg"
import heroSection5 from "../Images/heroSection5.jpeg"
import heroSection6 from "../Images/heroSection6.jpeg"
import heroSection7 from "../Images/heroSection7.jpeg"
import Shimla from "../Images/Shimla.jpg"
import LoadingIndicator from './LoadingIndicator'
import ErrorIndicator from './ErrorIndicator'

const images = [
  dubai,
  heroSection1,
  heroSection2,
  heroSection3,
  heroSection4,
  heroSection5,
  heroSection6,
  heroSection7,
  Shimla,
  dubai1,
];
const Home = () => {

  const navigate = useNavigate()
  const [conutry, setCountry] = useState([])
  const [india, setIndia] = useState([])

  const [Loading, setLoading] = useState(false)
  const [isError, setisError] = useState(false)

  const fetchInternational = () => {
    setLoading(true)
    axios.get(`http://localhost:8080/countries`).then((res) => {
      // console.log(res.data)
      setCountry(res.data)
      setLoading(false)
    }).catch(() => {
      setisError(true)
      setLoading(false)

    })
  }

  const fetchNational = () => {
    setLoading(true)
    axios.get(`http://localhost:8080/india`).then((res) => {
      // console.log(res.data)
      setIndia(res.data)
      setLoading(false)
    }).catch(() => {
      setisError(true)
      setLoading(false)

    })
  }

  useEffect(() => {
    fetchInternational()
    fetchNational()
  }, [])

// console.log(india)

//hero section code
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
};

const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
};

useEffect(() => {
    const interval = setInterval(goToNextImage, 3000); // Slide every 5 seconds
    return () => clearInterval(interval);
}, []);

//hero section code
  if (Loading) {
    return <LoadingIndicator />
  }

  if (isError) {
   return <ErrorIndicator />
  }
  return <>
    <HeroSection />
    
    <div style={{width:"100%",margin:"auto" }}>
      <Stack maxW={"90%"} m="auto" >

        <Flex w={"90%"} h={"150px"} borderRadius={"25px"} p={"20px"} m={"auto"}  bgGradient="linear(90deg, #FFAE80 1.95%, #BB9CE3)" >
          <FormControl  >
            <FormLabel>Loaction</FormLabel>
            <Input type='text' placeholder='Where do you want to go?' />
          </FormControl>
          <FormControl >
            <FormLabel>Destingation Date</FormLabel>
            <Input type='date' placeholder='Where do you want to go?' />
          </FormControl>
          <FormControl>
            <FormLabel>Guest</FormLabel>
            <Select>
              <option>Add Guest +</option>
              <option>1</option>
              <option>2</option>

            </Select>
          </FormControl>
        </Flex>
      </Stack>

      <VStack  w={"96%"} m="auto" my={"30px"}>

      
        <Flex gap={6} justify={"center"} w={"96%"} my={"30px"} flexDirection={{base:"row" ,md:"row",sm:"column"}}>
          <Box p="20px" bg="pink.100" borderRadius="10px" w={"32%"}  >
            <Heading fontSize="lg" as="h6" color={"goldenrod"}>40K</Heading>
            <Heading fontSize="lg" as="h6">Destination Trourism</Heading>
          </Box>

          <Box p="20px" bg="pink.100" borderRadius="10px" w={"25%"}>
            <Heading fontSize="lg" as="h6" color={"goldenrod"}>9K</Heading>
            <Heading fontSize="lg" as="h6">Happy Custmor</Heading>
          </Box>
          <Box p="20px" bg="pink.100" borderRadius="10px" w={"25%"} >
            <Heading fontSize="lg" as="h6" color={"goldenrod"}>50K</Heading>
            <Heading fontSize="lg" as="h6">Tour COmpetion</Heading>
          </Box>

        </Flex>
        <Heading textAlign={"center"} flexDirection={"column"} color={"whitesmoke"}>Indian Tourisum</Heading>
        <SimpleGrid m="auto" columns={{base:1,md:2,lg:3}} gap={5}>

          {india && india.map((ind) =>
            <Card p={"14px"} key={ind.id}>
              <Image src={ind.image} alt='india' borderRadius="10px" />
              <Text>{ind.description}</Text>
              <Button bg="blue.300" onClick={()=>{navigate(`/destination/${ind.id}`)}}>{ind.name}</Button>

            </Card>
          )}

        </SimpleGrid>
      </VStack>
      <Stack  my={"5%"}>
        <Center textAlign={"center"} flexDirection={"column"}>

          <Heading as="h3" color={"whitesmoke"}>INTERNATIONAL TOUR DESTINATION</Heading>

          <SimpleGrid w={"4xl"} my={"20px"} columns={{base:1,md:2,lg:3}} gap={5} >
            {conutry && conutry?.map((item, i) =>
              <Card p={"18px"} key={item.id} style={cardStyle}>
                <Image src={item.image} alt='travel' borderRadius="10px"/>
                <Text size={"15px"} color={"gray"}>{item.description}</Text>
                <Button p="8px" bg="blue.50" size={"20px"} >{item.country}</Button>
              </Card>
            )}
          </SimpleGrid>
        </Center>
       

      </Stack>
    </div>
  </>
}

export default Home