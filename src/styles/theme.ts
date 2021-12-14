import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    text: {
      '100': '#f5f8fa',
      '600': '#47585b'
    },
    info: {
      '300': '#dadada',
      '800': '#999999',
      '800_opaque': 'rgba(153, 153, 153, .5)'
    },
    highlight: {
      '500': '#ffba08',
      '500_opaque': 'rgba(255, 186, 8, .5)'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'text.100',
        color: 'info.800'
      }
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  }
});
