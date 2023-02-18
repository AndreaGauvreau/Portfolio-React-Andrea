import {EmailIcon, QuestionIcon, UnlockIcon} from '@chakra-ui/icons'
import {Flex, Icon, IconButton, Image} from '@chakra-ui/react'
import React from 'react'

export default function Menu() {
  return (
    <Flex p={5} justifyContent={'space-between'} position={'fixed'} w={'100vw'}>
      <Image
        src={'./images/identite/logo-c-b-600.png'}
        w={150}
        alt="logo-andrea-gauvreau"
      />
      <Flex gap={10} alignItems={'center'}>
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          icon={<UnlockIcon boxSize={6} />}
        />
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          icon={<EmailIcon boxSize={6} />}
        />
        <IconButton
          aria-label="github link"
          variant={'ghost'}
          icon={<QuestionIcon boxSize={6} />}
        />
      </Flex>
    </Flex>
  )
}
