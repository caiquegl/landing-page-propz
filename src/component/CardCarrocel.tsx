import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import Visa from "../assets/visa.png";
import Mastercard from "../assets/martercard.png";

interface IPropsAmounts {
  parcel: string;
  value: string;
}

export interface IPropsCarroucel {
  image: string;
  title: string;
  description: string;
  valueAmount: IPropsAmounts;
  valueNoAmount: IPropsAmounts;
  cash: string;
  url: string;
}

export default function CardCarrocel({
  cash,
  description,
  image,
  title,
  valueAmount,
  valueNoAmount,
  url,
}: IPropsCarroucel) {
  return (
    <Link href={url} target="_blank" textDecoration="none !important">
      <Flex
        mb="20rem"
        maxW="20rem"
        flexDirection="column"
        justifyContent="center"
      >
        <Image priority src={image} alt={title} height={200} width={400} />
        <Box mt="2rem">
          <Flex alignItems="flex-end" justifyContent="space-between">
            <Text
              maxW="15rem"
              fontSize="1rem"
              letterSpacing="0.02rem"
              fontWeight="bold"
            >
              {title}
            </Text>
            <Text
              maxW="15rem"
              fontSize="0.85rem"
              letterSpacing="0.02rem"
              fontWeight="bold"
            >
              {description}
            </Text>
          </Flex>
          <Divider borderColor="black.600" my="0.6rem" borderWidth="0.03rem" />
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Flex alignItems="flex-start">
                <Text
                  fontSize="1.55rem"
                  letterSpacing="0.02rem"
                  fontWeight="bold"
                >
                  {valueAmount.parcel}X
                </Text>
                <Text
                  fontSize="0.8rem"
                  letterSpacing="0.02rem"
                  fontWeight="bold"
                  ml="0.4rem"
                  mt="0.2rem"
                >
                  R$
                </Text>
                <Text
                  fontSize="1.55rem"
                  letterSpacing="0.02rem"
                  fontWeight="bold"
                >
                  {valueAmount.value.split(",")[0]}
                </Text>
                <Text
                  fontSize="0.8rem"
                  letterSpacing="0.02rem"
                  fontWeight="bold"
                  ml="0.4rem"
                  mt="0.2rem"
                >
                  ,{valueAmount.value.split(",")[1]}
                </Text>
              </Flex>
              <Text
                fontSize="0.6rem"
                letterSpacing="0.02rem"
                fontWeight="bold"
                mt="-0.4rem"
              >
                sem juros
              </Text>
            </Box>
            <Flex alignItems="center">
              <Image priority src={Visa} alt="Visa" height={50} width={50} />
              <Image
                priority
                src={Mastercard}
                alt="Mastercard"
                height={50}
                width={50}
              />
            </Flex>
          </Flex>
          <Flex mt="0.6rem" alignItems="flex-start">
            <Box>
              <Flex alignItems="flex-start">
                <Text
                  fontSize="1.55rem"
                  letterSpacing="0.02rem"
                  fontWeight="bold"
                >
                  {valueNoAmount.parcel}X
                </Text>
                <Text
                  fontSize="0.8rem"
                  letterSpacing="0.02rem"
                  fontWeight="bold"
                  ml="0.4rem"
                  mt="0.2rem"
                >
                  R$
                </Text>
                <Text
                  fontSize="1.55rem"
                  letterSpacing="0.02rem"
                  fontWeight="bold"
                >
                  {valueNoAmount.value.split(",")[0]}
                </Text>
                <Text
                  fontSize="0.8rem"
                  letterSpacing="0.02rem"
                  fontWeight="bold"
                  ml="0.4rem"
                  mt="0.2rem"
                >
                  ,{valueNoAmount.value.split(",")[1]}
                </Text>
              </Flex>
              <Text
                fontSize="0.6rem"
                letterSpacing="0.02rem"
                fontWeight="bold"
                mt="-0.4rem"
              >
                com juros
              </Text>
            </Box>
            <Text
              fontSize="0.8rem"
              letterSpacing="0.02rem"
              fontWeight="bold"
              ml="1.5rem"
            >
              ou R$ {cash} à vista
            </Text>
          </Flex>
          <Divider borderColor="black.600" my="0.6rem" borderWidth="0.03rem" />
        </Box>
      </Flex>
    </Link>
  );
}
