import Image from 'next/image';

import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      as="section"
      w="100%"
      position="relative"
      h={{ base: 150, md: 375, lg: 500 }}
      pb={{ base: 0, md: '16' }}
      pl={{ base: 0, md: '35' }}
      flexDirection="column"
      align="center"
      justify="center"
    >
      <Image src="/europe-2.png" layout="fill" alt="Europa" priority />

      <Flex
        w="100%"
        maxW={1160}
        mx="auto"
        align={{ base: 'center', md: 'flex-end' }}
        justify={{ base: 'center', md: 'flex-start' }}
        h="100%"
      >
        <Heading
          zIndex={999}
          color="text.100"
          fontWeight="600"
          fontSize={{ base: '3xl', md: '5xl' }}
        >
          Europa
        </Heading>
      </Flex>
    </Flex>
  );
}
