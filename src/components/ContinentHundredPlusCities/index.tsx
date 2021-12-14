import Image from 'next/image';

import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { CityCard } from './partials/CityCard';

export function ContinentHundredPlusCities() {
  return (
    <Flex
      w="100%"
      maxW={1160}
      mx="auto"
      mt="20"
      as="section"
      pl="4"
      direction="column"
    >
      <Heading
        as="h2"
        color="text.600"
        fontWeight="500"
        fontSize={{ base: '2xl', lg: '4xl' }}
      >
        Cidades 100+
      </Heading>

      <SimpleGrid
        w="100%"
        minChildWidth={256}
        spacing="5"
        mt={{ base: '2.5', lg: '20' }}
        mb={35}
        ml={{ base: '4', lg: 0 }}
      >
        <CityCard
          city="Londres"
          cityImgSrc="/london.png"
          country="Reino Unido"
          countryImgSrc="/uk.svg"
        />

        <CityCard
          city="Paris"
          cityImgSrc="/paris.png"
          country="França"
          countryImgSrc="/france.svg"
        />

        <CityCard
          city="Roma"
          cityImgSrc="/rome.png"
          country="Itália"
          countryImgSrc="/italy.svg"
        />

        <CityCard
          city="Praga"
          cityImgSrc="/praga.png"
          country="República Tcheca"
          countryImgSrc="/czech-republic.svg"
        />

        <CityCard
          city="Amsterdã"
          cityImgSrc="/amsterdan.png"
          country="Holanda"
          countryImgSrc="/netherlands.svg"
        />
      </SimpleGrid>
    </Flex>
  );
}
