import Image from 'next/image';
import Link from 'next/link';

import { useBreakpointValue } from '@chakra-ui/react';

export function Logo() {
  const logoSize = useBreakpointValue({
    base: { width: '81.20', height: '20' },
    sm: { width: '185', height: '46' }
  });

  return (
    <Link href="/">
      <a>
        <Image
          src="/logo.svg"
          width={logoSize?.width || '81.20'}
          height={logoSize?.height || '20'}
          alt="Logo"
          priority
        />
      </a>
    </Link>
  );
}
