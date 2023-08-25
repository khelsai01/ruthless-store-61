import {
  Container,
  Box, Flex,
  Image,
  HStack,
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
  Spacer,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Card,
  Button
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import bg from "../Images/bg.jpg"
import axios from "axios"
import HeroSection from '../Components/HeroSection'
import { useNavigate } from 'react-router-dom'
import { cardStyle } from './Cart'


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

console.log(india)
  if (Loading) {
    return <Stack>
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />

    </Stack>
  }

  if (isError) {
    throw new Error(`Invalid action type`)
  }
  return <>
    <HeroSection />
    <div style={{width:"100%",margin:"auto"}}>
      <Stack maxW={"90%"} m="auto">

        <Flex w={"90%"} h={"150px"} borderRadius={"25px"} p={"20px"} m={"auto"}  bgGradient="linear(90deg, #FFAE80 1.95%, #BB9CE3)">
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

      
        <Flex gap={6} justify={"center"} w={"96%"} my={"30px"}>
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
        <Heading textAlign={"center"} flexDirection={"column"}>Indian Tourisum</Heading>
        <SimpleGrid m="auto" gridTemplateColumns={"repeat(3,1fr)"} gap={5}>

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

          <Heading as="h3">INTERNATIONAL TOUR DESTINATION</Heading>

          <SimpleGrid w={"4xl"} my={"20px"} gridTemplateColumns={"repeat(3,1fr)"} gap={5} >
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