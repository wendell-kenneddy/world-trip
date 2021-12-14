import { Wrap, WrapItem } from '@chakra-ui/react';
import { TravelTypeCard } from './partials/TravelTypeCard';

export function TravelTypes() {
  return (
    <Wrap
      as="section"
      mt={['9', '9', '20']}
      mx="auto"
      px={[50, 50, '20']}
      w="100%"
      maxW={1240}
      align="center"
      justify={{ base: 'space-around', lg: 'space-between' }}
      spacing="4"
    >
      <WrapItem>
        <TravelTypeCard iconSrc="/cocktail.svg" subtitle="vida noturna" />
      </WrapItem>
      <WrapItem>
        <TravelTypeCard iconSrc="/surf.svg" subtitle="praia" />
      </WrapItem>
      <WrapItem>
        <TravelTypeCard iconSrc="/building.svg" subtitle="moderno" />
      </WrapItem>
      <WrapItem>
        <TravelTypeCard iconSrc="/museum.svg" subtitle="clássico" />
      </WrapItem>
      <WrapItem>
        <TravelTypeCard iconSrc="/earth.svg" subtitle="e mais..." />
      </WrapItem>
    </Wrap>
  );
}
