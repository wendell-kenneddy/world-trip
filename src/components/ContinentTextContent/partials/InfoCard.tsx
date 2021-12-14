import { Text, VStack } from '@chakra-ui/react';

interface InfoCardProps {
  mainText: string;
  subtitle: string;
}

export function InfoCard({ mainText, subtitle }: InfoCardProps) {
  return (
    <VStack
      spacing={-1}
      align={{ base: 'flex-start', lg: 'center' }}
      justify="center"
    >
      <Text
        fontSize={{ base: '2xl', lg: '5xl' }}
        fontWeight="600"
        color="highlight.500"
      >
        {mainText}
      </Text>

      <Text
        fontSize={{ base: 'md', lg: 'lg' }}
        color="text.600"
        fontWeight={{ base: '400', lg: '600' }}
      >
        {subtitle}
      </Text>
    </VStack>
  );
}
