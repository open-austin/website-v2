import React from 'react'
import { Stack, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Button } from './button'

const Hero = () => {
  const router = useRouter()

  const clickHandler = (e: any) => {
    e.preventDefault()
    console.log('here')
    const path = e.target.name
    router.push(`/${path}`)
  }

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={`url("/assets/code-across-2015-pano.png")`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '6xl', md: '7xl' })}
          >
            Open Austin
          </Text>
          <Text
            color={'white'}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
          >
            Open Austin addresses local social and civic challenges through
            creative uses of technology. We foster relationships between
            government, non- and for-profit organizations, and resident
            activists. All are welcome!
          </Text>
          <Stack direction={'row'} align={'flex-end'}>
            <Button name="about" onClick={clickHandler}>
              About
            </Button>
            <Button name="portfolio" onClick={clickHandler}>
              Projects
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}

export default Hero
