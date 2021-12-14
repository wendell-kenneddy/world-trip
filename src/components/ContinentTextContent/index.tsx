import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { InfoCard } from './partials/InfoCard';

export function ContinentTextContent() {
  return (
    <Flex
      as="section"
      w="100%"
      maxW={1160}
      mx="auto"
      mt={{ base: '6', lg: '20' }}
      align="center"
      justify="space-between"
      direction={{ base: 'column', lg: 'row' }}
      px={{ base: '4', xl: 0 }}
    >
      <Text
        color="text.600"
        fontSize={{ base: 'sm', lg: '2xl' }}
        maxW={600}
        textAlign="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
      </Text>

      <HStack
        w="100%"
        maxW={600}
        spacing={42}
        mt={{ base: '4', lg: 0 }}
        justify={{ base: 'flex-start', lg: 'center' }}
        align="center"
      >
        <InfoCard mainText="50" subtitle="países" />
        <InfoCard mainText="60" subtitle="línguas" />
        <InfoCard mainText="27" subtitle="cidades 100+" />
      </HStack>
    </Flex>
  );
}
