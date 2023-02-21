import {Box, Heading, Image} from '@chakra-ui/react'
import React from 'react'
import {useParams} from 'react-router-dom'
import projetsdata from '../Home/Projects/floatingCards/FakeData'

export default function ProjetsId() {
  const {id} = useParams()
  const projet = projetsdata.find(projet => projet.id === parseInt(id))
  console.log(projet)
  return (
    <Box bgColor="#0d0d12" padding={0} m={0} w={'100%'} overflow={'hidden'}>
      <Heading>{projet.title}</Heading>
      <p>{projet.description}</p>
      <p>{projet.categories.join(', ')}</p>
      <Image src={projet.image} alt={projet.title} />
    </Box>
  )
}
