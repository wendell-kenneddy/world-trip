import Image from 'next/image';

import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelTypeCardProps {
  subtitle: string;
  iconSrc: string;
}

export function TravelTypeCard({ iconSrc, subtitle }: TravelTypeCardProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex direction={{ base: 'row', lg: 'column' }} align="center">
      {isWideVersion ? (
        <Image src={iconSrc} alt="Drink" width="85" height="85" />
      ) : (
        <Box w="2" h="2" borderRadius="9999" bg="highlight.500"></Box>
      )}

      <Text
        mt={isWideVersion ? '6' : 0}
        ml={!isWideVersion ? '2' : 0}
        fontSize={['md', 'xl']}
        fontWeight="600"
        color="text.600"
      >
        {subtitle}
      </Text>
    </Flex>
  );
}
