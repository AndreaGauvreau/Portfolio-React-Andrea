import {Flex, IconButton, Image} from '@chakra-ui/react'
import React from 'react'
import {DribbleIcon} from '../../ui/icones/dribbleIcon/dribbleicon'
import {GithIcon} from '../../ui/icones/githubicon/githubIcon'
import {LinkdinIcon} from '../../ui/icones/linkedin/linkedinIcon'

export default function Menu() {
  return (
    <Flex
      pl={{base: 4, md: 5, lg: 10}}
      pr={{base: 4, md: 5, lg: 10}}
      pt={{base: 4, md: 4, lg: 4}}
      pb={{base: 4, md: 5, lg: 10}}
      justifyContent={'space-between'}
      position={'fixed'}
      w={'100vw'}
      zIndex={20}
    >
      <Image
        src={'/images/identite/logo-c-b-600.png'}
        w={'auto'}
        h={{base: '40px', md: '40px', lg: '60px'}}
        alt="logo-andrea-gauvreau"
      />
      <Flex gap={{base: 2, md: 5, lg: 10}} alignItems={'center'}>
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          bgColor={'#ffffff00'}
          _hover={{bgColor: '#ffffff20'}}
          boxSize={12}
          icon={
            <GithIcon
              color={'#ffffff50'}
              hoverColor={'#ffffff'}
              width={'40px'}
            />
          }
        />
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          boxSize={12}
          bgColor={'#ffffff00'}
          _hover={{bgColor: '#ffffff20'}}
          icon={
            <LinkdinIcon
              color={'#ffffff50'}
              hoverColor={'#ffffff'}
              width={'35px'}
            />
          }
        />
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          boxSize={12}
          bgColor={'#ffffff00'}
          _hover={{bgColor: '#ffffff20'}}
          icon={
            <DribbleIcon
              color={'#ffffff50'}
              hoverColor={'#ffffff'}
              width={'35px'}
            />
          }
        />
      </Flex>
    </Flex>
  )
}
