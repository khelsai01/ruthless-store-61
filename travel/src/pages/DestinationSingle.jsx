import { Button, Center, Heading, Select, SimpleGrid, Stack, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from './Card';
import LoadingIndicator from './LoadingIndicator';
import ErrorIndicator from './ErrorIndicator';

const DestinationSingle = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [sortOrder, setSortOrder] = useState('');

  const fetchDestination = (id, sortOrder) => {
    setLoading(true);
    fetch(`http://localhost:8080/india/${id}?_sort=price&_order=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.packages);
        setLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDestination(id, sortOrder);
  }, [id, sortOrder]);

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  console.log(sortOrder);
  if (loading) {
    return <LoadingIndicator />;
  }

  if(isError){
    return <ErrorIndicator />
  }
  return (
    <div style={{ width: '95%', margin: 'auto', marginTop: '15px' }}>
      <HStack>
        <Select bg="#FFFFE0" w="sm" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="">--Sort By Price--</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </Select>
      </HStack>
      <Stack my={5}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5} m="auto">
          {data.map((destine) => (
            <Cards key={destine.id} {...destine} />
          ))}
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default DestinationSingle;
