import {Flex, IconButton, Image} from '@chakra-ui/react'
import React, {useState} from 'react'
import {colorsDD} from '../../ui/colors/colors'
import {DribbleIcon} from '../../ui/icones/dribbleIcon/dribbleicon'
import {GithIcon} from '../../ui/icones/githubicon/githubIcon'
import {LinkdinIcon} from '../../ui/icones/linkedin/linkedinIcon'

export default function Menu({color1, color2}) {
  const [githubColor, setGithubColor] = useState('#ffffff50')
  const [linkedinColor, setLinkdedinColor] = useState('#ffffff50')
  const [dribbleColor, setDribbleColor] = useState('#ffffff50')
  return (
    <Flex
      pl={{base: 10, md: 5, lg: 10}}
      pr={{base: 10, md: 5, lg: 10}}
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
          boxSize={{base: 8, md: 10, lg: 12}}
          onMouseEnter={() => setGithubColor('white')}
          onMouseLeave={() => setGithubColor('#ffffff50')}
          icon={
            <GithIcon
              color={githubColor}
              color1={color1 ? color1 : colorsDD.pink}
              color2={color2 ? color2 : colorsDD.green}
              width={{base: '20px', md: '30px', lg: '40px'}}
            />
          }
        />
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          boxSize={{base: 8, md: 10, lg: 12}}
          bgColor={'#ffffff00'}
          _hover={{bgColor: '#ffffff20'}}
          onMouseEnter={() => setLinkdedinColor('white')}
          onMouseLeave={() => setLinkdedinColor('#ffffff50')}
          icon={
            <LinkdinIcon
              color={linkedinColor}
              color1={color1 ? color1 : colorsDD.pink}
              color2={color2 ? color2 : colorsDD.green}
              width={{base: '20px', md: '30px', lg: '40px'}}
            />
          }
        />
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          boxSize={{base: 8, md: 10, lg: 12}}
          bgColor={'#ffffff00'}
          _hover={{bgColor: '#ffffff20'}}
          onMouseEnter={() => setDribbleColor('white')}
          onMouseLeave={() => setDribbleColor('#ffffff50')}
          icon={
            <DribbleIcon
              color={dribbleColor}
              color1={color1 ? color1 : colorsDD.pink}
              color2={color2 ? color2 : colorsDD.green}
              width={{base: '20px', md: '30px', lg: '40px'}}
            />
          }
        />
      </Flex>
    </Flex>
  )
}
