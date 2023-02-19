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

export default function Cards({datas, currentIndex, length}) {
  const [pos, setPos] = useState('-50%')
  const [index, setIndex] = useState(1)
  const [transform, setTransform] = useState(0)
  const [scale, setScale] = useState(1)
  const [opcaticy, setOpacity] = useState(1)

  useEffect(() => {
    const diff = Math.abs(currentIndex - datas.id)

    if (datas.id === currentIndex) {
      setPos('-50%')
      setIndex(5)
      setTransform(0)
      setScale(1)
      setOpacity(1)
    } else {
      const diff = datas.id - currentIndex
      if (diff === 1) {
        setPos('-100%')
        setIndex(4)
        setTransform(-10)
        setScale(0.8)
        setOpacity(0.7)
      } else if (diff === -1) {
        setPos('0%')
        setIndex(4)
        setTransform(10)
        setScale(0.8)
        setOpacity(0.7)
      } else if (diff === 2) {
        setPos('-150%')
        setIndex(3)
        setTransform(-20)
        setScale(0.4)
        setOpacity(0.2)
      } else if (diff === -2) {
        setPos('50%')
        setIndex(3)
        setTransform(20)
        setScale(0.4)
        setOpacity(0.2)
      } else if (diff === length) {
        setPos('-50%')
        setIndex(5)
        setTransform(0)
        setScale(1)
        setOpacity(1)
      } else if (diff === length - 1) {
        setPos('0%')
        setIndex(4)
        setTransform(10)
        setScale(0.8)
        setOpacity(0.7)
      } else if (diff === length - 2) {
        setPos('50%')
        setIndex(3)
        setTransform(20)
        setScale(0.4)
        setOpacity(0.2)
      } else {
        setScale(0)
      }
    }
  }, [currentIndex, datas.id, length])
  return (
    <>
      <Card
        maxW="sm"
        w={'350px'}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={`translate(${pos},20%) rotate(${transform}deg) scale(${scale})`}
        transition={'0.5s ease'}
        transformOrigin="center"
        zIndex={index}
        opacity={opcaticy}
      >
        <CardBody padding={3}>
          <Box
            bgImage={datas?.image}
            w="100%"
            height={'250px'}
            bgSize="cover"
            borderRadius={10}
          />

          <Stack mt="6" spacing="3">
            <Heading
              variant="dew"
              fontFamily={'bely-display, sans-serif'}
              size="md"
            >
              {datas?.title}
            </Heading>
            <Text>{datas?.description}</Text>
            <HStack spacing={4}>
              {datas.categories.map(name => (
                <Tag key={name} variant="subtle" colorScheme="dew">
                  <TagLabel>{name}</TagLabel>
                </Tag>
              ))}
            </HStack>
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex justifyContent={'space-around'} w="100%">
            <IconButton
              size={'lg'}
              variant={'ghost'}
              colorScheme="white"
              bgColor={'#00000010'}
              aria-label="Search database"
              fontSize={'20px'}
              icon={<ViewIcon />}
            />
            <IconButton
              size={'lg'}
              bgColor={'#00000010'}
              variant={'ghost'}
              colorScheme="white"
              aria-label="Search database"
              fontSize={'20px'}
              icon={<LinkIcon />}
            />
            <IconButton
              size={'lg'}
              bgColor={'#00000010'}
              variant={'ghost'}
              colorScheme="white"
              aria-label="Search database"
              fontSize={'20px'}
              icon={<StarIcon />}
            />
          </Flex>
        </CardFooter>
      </Card>{' '}
    </>
  )
}
