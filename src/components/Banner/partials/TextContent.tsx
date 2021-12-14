import { Flex, Heading, Text } from '@chakra-ui/react';

export function TextContent() {
  return (
    <Flex w="100%" maxW={524} direction="column">
      <Heading
        mb="5"
        fontWeight="medium"
        fontSize={['xl', 'xl', '4xl']}
        color="text.100"
      >
        5 Continentes, infinitas possibilidades
      </Heading>

      <Text fontSize={['sm', 'sm', 'xl']} color="info.300">
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Flex>
  );
}
