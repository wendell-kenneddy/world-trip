import Image from 'next/image';
import Link from 'next/link';

import { IconButton } from '@chakra-ui/react';

export function BackButton() {
  return (
    <Link href="/" passHref>
      <IconButton
        variant="unstyled"
        position="absolute"
        left={0}
        as="a"
        aria-label="Voltar para a página inicial"
        icon={<Image src="/back.svg" width="32" height="32" alt="Voltar" />}
        size="sm"
      />
    </Link>
  );
}
