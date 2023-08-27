import React from 'react'
import {
  Card,
  Image,
  Heading,
  Text,
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spacer
} from '@chakra-ui/react'

export const cardStyle = {
  background: `linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box`,
  color: "whitesmoke",
  borderRadius: "10px"
}
const Cards = ({ name, image, description, id, price, rating }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return <Card p={3} my={5} style={cardStyle}  >
    <Image src={image} alt='destine' borderRadius={5} />
    <Heading fontSize={30} my={3} textAlign="center" color="#7575CF">{name}</Heading>
    <Text>{description}</Text>
    <Text my={5} textAlign="center" color="#FFDEAD">Price : ₹{price}</Text>
    <Text my={5} textAlign="center" color="#FFE87C">Rating : {rating}</Text>


    <Center my={5} >
      <Button px={5} bg={"#357EC7"} color="whitesmoke" onClick={onOpen} >View Destination</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#E8F1D4">
          <ModalHeader textAlign="center">Destination Place</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Center>
              <Image src={image} alt='destine' borderRadius={5} />
            </Center>
            <Heading fontSize={30} my={3} textAlign="center" color="#7575CF">{name}</Heading>
            <Text>{description}</Text>
            <Text my={5} textAlign="center" color="#3D0C02">Price : ₹{price}</Text>
            <Text my={5} textAlign="center" color="#3D0C02">Rating : {rating}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Book
            </Button>
            <Spacer />
            <Text>travel.com</Text>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  </Card >
}

export default Cards