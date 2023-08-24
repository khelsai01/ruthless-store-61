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


const Home = () => {

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
  return <Container maxW={"container.xl"}>
    <div style={{ width: "100%", colorScheme: "light" }}>

      <Image src={bg} alt='image' style={{ width: "100%", height: "400px" }} />
    </div>
    <Center>

      <Flex maxW={"80%"} h={"150px"} borderRadius={"25px"} p={"20px"} m={"auto"} mt={"-50px"} bgGradient="linear(90deg, #FFAE80 1.95%, #BB9CE3)">
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
    </Center>

    <Stack border={"1px solid red"} my={"5%"}>
      <Center border={"1px solid black"} textAlign={"center"} flexDirection={"column"}>

        <Heading as="h3">INTERNATIONAL TOUR DESTINATION</Heading>

        <SimpleGrid w={"4xl"} border={"1px solid black"} my={"20px"} gridTemplateColumns={"repeat(3,1fr)"} gap={5} >
          {conutry && conutry?.map((item, i) =>
            <Card p={"10px"} key={item.id}>
              <Image src={item.image} />
              <Text size={"15px"} color={"gray"}>{item.description}</Text>
              <Button p="8px" bg="blue.50" size={"20px"}>{item.country}</Button>
            </Card>
          )}
        </SimpleGrid>
      </Center>
      <Flex gap={6} justify={"center"}>
        <Box p="20px" bg="pink.100" borderRadius="10px" w={"25%"}  >
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

    </Stack>
    <VStack>

      <Heading textAlign={"center"} flexDirection={"column"}>Indian Tourisum</Heading>
      <SimpleGrid w={"4xl"}  border={"1px solid black"} m="auto" gridTemplateColumns={"repeat(3,1fr)"} gap={5}>

        {india && india.map((ind) =>
          <Card p={"10px"} key={ind.id}>
            <Image src={ind.image} alt='india' />
            <Text>{ind.description}</Text>
            <Button>{ind.name}</Button>

          </Card>
        )}

      </SimpleGrid>
    </VStack>
  </Container>
}

export default Home