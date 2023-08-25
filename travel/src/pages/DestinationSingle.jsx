import { Button, Card, Center, Heading, Image, SimpleGrid, Spinner, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import websitebg from "../Images/websitebg.jpeg"
import Cart from './Cart';

const DestinationSingle = () => {
    const {id} = useParams();
    // console.log(id)


    const [data, setData] = useState([]);
    const [Loading ,setLoading] = useState(false);
    const [isError ,setisError] = useState(false);



    const  fetchDestination=(id)=>{
        setLoading(true)
        fetch(`http://localhost:8080/india/${id}`).then((res)=>res.json()).then((data)=>{
            setData(data.packages);
            setLoading(false)
        }).catch(()=>{
            setisError(true);
            setLoading(false)
        })
    }

    useEffect(()=>{

        fetchDestination(id)
    },[id])

    // console.log(data)

    if(Loading){
        return <Spinner size='xl' />
    }
  return (
    <div style={{width:"95%",margin:"auto"}} >
        
        <Stack my={5}>
            <SimpleGrid columns={{base:1,md:2,lg:3}} gap={5} m="auto">
                {data.map((destine)=>
                <Cart key={destine.id} {...destine} />
                
                )}
            </SimpleGrid>
        </Stack>
    </div>
  )
}

export default DestinationSingle