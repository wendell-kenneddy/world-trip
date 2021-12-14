import { useRouter } from 'next/router';

import { Flex } from '@chakra-ui/react';
import { BackButton } from './partials/BackButton';

import { Logo } from './partials/Logo';

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      mx="auto"
      w="100%"
      maxW={1160}
      h={[50, 100]}
      align="center"
      justify="center"
      position="relative"
    >
      {asPath !== '/' && <BackButton />}

      <Logo />
    </Flex>
  );
}
