import Head from 'next/head';

import { Box } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { ContinentBanner } from '../components/ContinentBanner';
import { ContinentTextContent } from '../components/ContinentTextContent';
import { ContinentHundredPlusCities } from '../components/ContinentHundredPlusCities';

export default function Europe() {
  return (
    <>
      <Head>
        <title>World Trip | Europe</title>
      </Head>

      <Header />

      <Box as="main" role="main">
        <ContinentBanner />
        <ContinentTextContent />
        <ContinentHundredPlusCities />
      </Box>
    </>
  );
}
