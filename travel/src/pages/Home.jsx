import { Container ,Box, Image, HStack, FormControl, Input, Select, FormLabel} from '@chakra-ui/react'
import React from 'react'
import bg from "../Images/bg.jpg"


const Home = () => {

  return <Container maxW={"container.xl"}>
      <Box >
        <Image src={bg} alt='image' h="50vh" />
      </Box>
      <HStack maxW={"lg"} border={"1px solid red"} m={"auto"}mt={"-50px"} bg={"black"}>
        <FormControl>
          <FormLabel>Loaction</FormLabel>
          <Input type='text' placeholder='Where do you want to go?'/>
        </FormControl>
        <FormControl>
          <FormLabel>Destingation Date</FormLabel>
          <Input type='date' placeholder='Where do you want to go?'/>
        </FormControl>
        <FormControl>
          <FormLabel>Guest</FormLabel>
          <Select>
            <option>Add Guest +</option>
            <option>1</option>
            <option>2</option>

          </Select>
        </FormControl>
      </HStack>
   
    </Container>
}

export default Home