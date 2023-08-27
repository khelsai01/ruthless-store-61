import {
  SimpleGrid,
  Container,
  HStack,
  Select,
  Button,
  Center,
  
} from '@chakra-ui/react';
import React from 'react'
import { useState, useEffect } from 'react';
import Cards from './Card';
// import Pagination from './Pagination';
const Desination = () => {

  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [sortOrder, setSortOrder] = useState("")
  const [limit, setlimit] = useState(6)
  const [page, setPage] = useState(1)
  const total = Math.ceil(45 / limit)


  const fetchDestination = (sortOrder, page, limit) => {


    setLoading(true)
    fetch(`http://localhost:8080/destination?page=${page}&_limit=${limit}&_sort=price&_order=${sortOrder}`).then((res) => res.json()).then((data) => {
      console.log(data)
      setData(data);

      setLoading(false)
    }).catch(() => {
      setisError(true);
      setLoading(false)
    })
  }

  const handlePage = (handlePage) => {
    setPage(handlePage)
  }

  useEffect(() => {

    fetchDestination(sortOrder, page, limit)
  }, [sortOrder, page, limit])



  return <Container maxW={"full"} mt={4}>
    <HStack>
      <Select bg="#FFFFE0" w="sm" value={limit} onChange={(e) => setlimit(e.target.value)}>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>

      </Select>
      <Select bg="#FFFFE0" w="sm" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">--Sort By Price--</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>

      </Select>
    </HStack>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} m="auto">
      {data.map((destine) =>
        <Cards key={destine.id} {...destine} />

      )}
    </SimpleGrid>
    <Center>
      <HStack>
        {Array.from({ length: total }, (_, index) => (
          <Button key={index} onClick={() => handlePage(index)}>
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Center>
  </Container>
}

export default Desination