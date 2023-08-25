import React from 'react'
import { Card, Image, Heading, Text, Button, Center } from '@chakra-ui/react'

export const cardStyle={
   background: `linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box`,
   color:"whitesmoke",
   borderRadius:"10px"
 }
const Cart = ({ name, image, description, id,price ,rating}) => {

  return <Card p={3} my={5} style={cardStyle}  >
    <Image src={image} alt='destine' borderRadius={5} />
    <Heading fontSize={30} my={3} textAlign="center" color="#7575CF">{name}</Heading>
    <Text>{description}</Text>
    <Text my={5} textAlign="center" color="#FFDEAD">Price : ₹{price}</Text>
    <Text my={5} textAlign="center" color="#FFE87C">Rating : {rating}</Text>


    <Center my={5} >
      <Button w="100px" px={5} bg={"#357EC7"} color="whitesmoke" >Book</Button>
    </Center>
  </Card>
}

export default Cart