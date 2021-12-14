import Image from 'next/image';
import Link from 'next/link';

import { Flex, VStack, Heading, Text } from '@chakra-ui/react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export function ContinentsSwiper() {
  return (
    <Flex
      as="section"
      w="100%"
      maxW={1240}
      px={{ base: 0, lg: '25' }}
      mb="10"
      h={{ base: 250, lg: 425 }}
      mx="auto"
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        allowSlideNext
        allowSlidePrev
      >
        <SwiperSlide>
          <Link href="/europe" passHref>
            <Flex
              as="a"
              w="100%"
              h="100%"
              position="relative"
              align="center"
              justify="center"
            >
              <Image src="/europe-1.jpg" layout="fill" alt="Europa" priority />

              <VStack zIndex="99" spacing={{ base: '3', lg: '4' }}>
                <Heading
                  as="h3"
                  fontSize={{ base: '2xl', md: '4xl' }}
                  color="text.100"
                >
                  Europa
                </Heading>

                <Text
                  fontWeight="bold"
                  color="info.300"
                  fontSize={{ base: 'sm', md: '2xl' }}
                >
                  O continente mais antigo.
                </Text>
              </VStack>
            </Flex>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/europe" passHref>
            <Flex
              as="a"
              w="100%"
              h="100%"
              position="relative"
              align="center"
              justify="center"
            >
              <Image src="/europe-1.jpg" layout="fill" alt="Europa" priority />

              <VStack zIndex="99" spacing={{ base: '3', lg: '4' }}>
                <Heading
                  as="h3"
                  fontSize={{ base: '2xl', md: '4xl' }}
                  color="text.100"
                >
                  Europa
                </Heading>

                <Text
                  fontWeight="bold"
                  color="info.300"
                  fontSize={{ base: 'sm', md: '2xl' }}
                >
                  O continente mais antigo.
                </Text>
              </VStack>
            </Flex>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/europe" passHref>
            <Flex
              as="a"
              w="100%"
              h="100%"
              position="relative"
              align="center"
              justify="center"
            >
              <Image src="/europe-1.jpg" layout="fill" alt="Europa" priority />

              <VStack zIndex="99" spacing={{ base: '3', lg: '4' }}>
                <Heading
                  as="h3"
                  fontSize={{ base: '2xl', md: '4xl' }}
                  color="text.100"
                >
                  Europa
                </Heading>

                <Text
                  fontWeight="bold"
                  color="info.300"
                  fontSize={{ base: 'sm', md: '2xl' }}
                >
                  O continente mais antigo.
                </Text>
              </VStack>
            </Flex>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
