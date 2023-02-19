import {Flex} from '@chakra-ui/react'
import React from 'react'
import ButtonDD from '../../ui/ButtonDD/ButtonDD'

export default function Contact() {
  return (
    <Flex h="100vh" justifyContent={'center'} alignItems={'center'}>
      <ButtonDD text={'Contactez-moi'} link={'#'} colorThemeDD={'pink'} />
    </Flex>
  )
}
