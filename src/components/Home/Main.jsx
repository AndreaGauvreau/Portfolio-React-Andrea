import {Box} from '@chakra-ui/react'
import React from 'react'
import CardMap from './floatingCards/CardsContent'
import Home from './Home'
import Menu from './Menu/Menu'

export default function Main() {
  return (
    <>
      <Box bgColor="#0d0d12">
        <Menu />
        <Home />
        <CardMap />
      </Box>
    </>
  )
}
