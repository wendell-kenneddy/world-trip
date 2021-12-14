import Image from 'next/image';

import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { TextContent } from './partials/TextContent';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="section"
      w="100%"
      h={[163, 163, 335]}
      py={['4', '4', '20']}
      px={['7', '7', 140]}
      backgroundImage="/banner-bg.png"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      align="center"
      justify={['flex-start', 'flex-start', 'center']}
    >
      <Flex w="100%" maxW={1240} align="center" justify="space-between">
        <TextContent />

        {isWideVersion && (
          <Image src="/airplane.svg" width="431" height="293" alt="Avião" />
        )}
      </Flex>
    </Flex>
  );
}
