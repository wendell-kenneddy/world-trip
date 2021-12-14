import Head from 'next/head';

import { Divider, Box } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { ContinentsSwiper } from '../components/ContinentsSwiper';

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
        <meta name="description" content="Take a trip around the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Box as="main" w="100%" mx="auto">
        <Banner />
        <TravelTypes />

        <Divider
          w={{ base: '16', lg: 90 }}
          h="1"
          mx="auto"
          mt={{ base: '36px', lg: '20' }}
          mb={{ base: '6', lg: '52px' }}
          bg="info.800"
        />

        <ContinentsSwiper />
      </Box>
    </>
  );
}
