import { SimpleGrid, Container, HStack, Select } from '@chakra-ui/react';
import React from 'react'
import { useState ,useEffect } from 'react';
import Cart from './Cart';
const Desination = () => {

  const [data, setData] = useState([]);
    const [Loading ,setLoading] = useState(false);
    const [isError ,setisError] = useState(false);
    const [sortOrder, setSortOrder] = useState("")
  const [sortCriteria, setSortCriteria ] = useState("price")


    const  fetchDestination=(sortCriteria,sortOrder)=>{
        setLoading(true)
        fetch(`http://localhost:8080/destination?_sort=${sortCriteria}&_order=${sortOrder}`).then((res)=>res.json()).then((data)=>{
            setData(data);
            setLoading(false)
        }).catch(()=>{
            setisError(true);
            setLoading(false)
        })
    }

    useEffect(()=>{

        fetchDestination(sortCriteria,sortOrder)
    },[sortCriteria,sortOrder])

    console.log(data)
  return <Container maxW={"full"}>
    <HStack>
    <Select bg="#FFFFE0"  w="sm" value={sortCriteria} onChange={(e)=>setSortCriteria(e.target.value)}>
        <option value="">--Sort Criteria--</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>

      </Select>
      <Select bg="#FFFFE0"  w="sm" value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
        <option value="">--Sort By Price--</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>

      </Select>
    </HStack>
    <SimpleGrid columns={{base:1,md:2,lg:3}} gap={4} m="auto">
     {data.map((destine)=>
                <Cart key={destine.id} {...destine} />
                
                )}
  </SimpleGrid>
  </Container>
}

export default Desination