import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Box,
  HStack,
  TagLabel,
  Tag,
  IconButton,
  Flex,
} from '@chakra-ui/react'
import {ViewIcon, LinkIcon, StarIcon} from '@chakra-ui/icons'

import {useState} from 'react'
import {useEffect} from 'react'
import {colorsDD} from '../../../ui/colors/colors'
import {Link} from 'react-router-dom'

export default function Cards({datas, currentIndex, length}) {
  const [pos, setPos] = useState('-50%')
  const [index, setIndex] = useState(1)
  const [transform, setTransform] = useState(0)
  const [scale, setScale] = useState(1)
  const [opcaticy, setOpacity] = useState(1)
  const [blur, setBlur] = useState('0px')

  useEffect(() => {
    const diff = Math.abs(currentIndex - datas.id)

    if (datas.id === currentIndex) {
      setPos('-50%')
      setIndex(5)
      setTransform(0)
      setScale(1)
      setOpacity(1)
      setBlur('0px')
    } else {
      const diff = datas.id - currentIndex
      if (diff === 1) {
        setPos('-100%')
        setIndex(4)
        setTransform(-10)
        setScale(0.8)
        setOpacity(0.7)
        setBlur('4px')
      } else if (diff === -1) {
        setPos('0%')
        setIndex(4)
        setTransform(10)
        setScale(0.8)
        setOpacity(0.7)
        setBlur('4px')
      } else if (diff === 2) {
        setPos('-150%')
        setIndex(3)
        setTransform(-20)
        setScale(0.4)
        setOpacity(0.2)
        setBlur('30px')
      } else if (diff === -2) {
        setPos('50%')
        setIndex(3)
        setTransform(20)
        setScale(0.4)
        setOpacity(0.2)
        setBlur('30px')
      } else if (diff === length) {
        setPos('-50%')
        setIndex(5)
        setTransform(0)
        setScale(1)
        setOpacity(1)
        setBlur('0px')
      } else if (diff === length - 1) {
        setPos('0%')
        setIndex(4)
        setTransform(10)
        setScale(0.8)
        setOpacity(0.7)
        setBlur('4px')
      } else if (diff === length - 2) {
        setPos('50%')
        setIndex(3)
        setTransform(20)
        setScale(0.4)
        setOpacity(0.2)
        setBlur('20px')
      } else {
        setScale(0)
      }
    }
  }, [currentIndex, datas.id, length])
  return (
    <>
      <Card
        maxW="sm"
        w={{base: '250px', md: '250px', lg: '350px'}}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={`translate(${pos},-50%) rotate(${transform}deg) scale(${scale})`}
        transition={'0.5s ease'}
        transformOrigin="center"
        zIndex={index}
        opacity={opcaticy}
        bgColor={colorsDD.bgcolor2}
        color={'white'}
        filter={`blur(${blur})`}
      >
        <Flex position={'absolute'} top={'20px'} right={'20px'} gap={2}>
          <IconButton
            size={{base: 'sm', md: 'lg', lg: 'lg'}}
            variant={'ghost'}
            colorScheme="white"
            bgColor={'#ffffff20'}
            _hover={{bgColor: '#ffffff40'}}
            backdropFilter={'blur( 6px )'}
            aria-label="Search database"
            fontSize={{base: '10px', md: '20px', lg: '20px'}}
            icon={<ViewIcon />}
          />
          <IconButton
            size={{base: 'sm', md: 'lg', lg: 'lg'}}
            bgColor={'#ffffff20'}
            backdropFilter={'blur( 6px )'}
            variant={'ghost'}
            _hover={{bgColor: '#ffffff40'}}
            colorScheme="white"
            aria-label="Search database"
            fontSize={{base: '10px', md: '20px', lg: '20px'}}
            icon={<LinkIcon />}
          />
          <Link to={`/projets/${datas.id}`}>
            <IconButton
              size={{base: 'sm', md: 'lg', lg: 'lg'}}
              bgColor={'#ffffff20'}
              backdropFilter={'blur( 6px )'}
              variant={'ghost'}
              _hover={{bgColor: '#ffffff40'}}
              colorScheme="white"
              aria-label="Search database"
              fontSize={{base: '10px', md: '20px', lg: '20px'}}
              icon={<StarIcon />}
            />
          </Link>
        </Flex>
        <CardBody padding={3}>
          <Box
            bgImage={datas?.image}
            w="100%"
            h={{base: '150px', md: '150px', lg: '250px'}}
            bgSize="cover"
            bgPosition={'center'}
            borderRadius={10}
          />

          <Stack mt="6" spacing="3">
            <Heading
              variant="dew"
              fontFamily={'bely-display, sans-serif'}
              size={{base: 'sm', md: 'md', lg: 'xl'}}
            >
              {datas?.title}
            </Heading>
            <Text fontSize={{base: 'xs', md: 'sm', lg: 'lg'}}>
              {datas?.description}
            </Text>
            <Flex gap={2} wrap={'wrap'}>
              {datas.categories.map(name => (
                <Tag key={name} variant="subtle" colorScheme="dew">
                  <TagLabel fontSize={{base: 'xs', md: 'sm', lg: 'md'}}>
                    {name}
                  </TagLabel>
                </Tag>
              ))}
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}
