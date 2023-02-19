import {Box} from '@chakra-ui/react'
import React from 'react'
import Main from './Main/Main'
import Competences from './Competences/Competences'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'
import Project from './Projects/Project'

export default function Home() {
  return (
    <>
      <Box bgColor="#0d0d12" padding={0} m={0} w={'100%'} overflow={'hidden'}>
        <Menu />
        <Main />
        <Competences />
        <Project />
        <Contact />
      </Box>
    </>
  )
}
