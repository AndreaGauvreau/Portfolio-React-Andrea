import {Box} from '@chakra-ui/react'
import React from 'react'
import Main from './Main/Main'
import Competences from './Competences/Competences'
import CardMap from './Main/floatingCards/CardsContent'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'

export default function Home() {
  return (
    <>
      <Box bgColor="#0d0d12" padding={0} m={0}>
        <Menu />
        <Main />
        <Competences />
        <CardMap />
        <Contact />
      </Box>
    </>
  )
}
