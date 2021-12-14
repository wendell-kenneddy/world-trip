import Image from 'next/image';

import { Box, Flex, Text } from '@chakra-ui/react';

interface CityCardProps {
  city: string;
  cityImgSrc: string;
  country: string;
  countryImgSrc: string;
}

export function CityCard({
  city,
  cityImgSrc,
  country,
  countryImgSrc
}: CityCardProps) {
  return (
    <Flex w="64" h={279} bg="white" direction="column">
      <Box position="relative" w="100%" h={173}>
        <Image src={cityImgSrc} layout="fill" alt={city} />
      </Box>

      <Flex w="100%" mt={18} px="6" align="center" justify="space-between">
        <Box>
          <Text fontSize={20} fontWeight={600} color="text.600">
            {city}
          </Text>

          <Text
            mt="3"
            fontWeight={500}
            color="info.800"
            fontSize="md"
            lineHeight="2xl"
          >
            {country}
          </Text>
        </Box>

        <Image src={countryImgSrc} width="30" height="30" alt={country} />
      </Flex>
    </Flex>
  );
}
