import { Box, Divider, Flex, Text } from "@chakra-ui/react";

export default function CardPropz() {
  return (
    <Flex
      justifyContent="center"
      p="2rem"
      w="100%"
      maxW="23rem"
      borderWidth="0.25rem"
      borderColor="yellow.500"
      flexDirection="column"
    >
      <Box>
        <Text
          fontSize="1.4rem"
          letterSpacing="-0.01rem"
          fontWeight="bold"
          mb="1.3rem"
          color="black.600"
          textAlign="center"
        >
          Lojas Propz
        </Text>
      </Box>
      <Divider
        borderColor="yellow.500"
        my="0.6rem"
        borderWidth="0.03rem"
        mb="1.3rem"
      />
      <Text
        fontSize="1.2rem"
        letterSpacing="-0.01rem"
        fontWeight="bold"
        mb="1.1rem"
        color="black.600"
        textAlign="center"
      >
        Belo Horizonte
      </Text>
      <Text
        fontSize="1.2rem"
        letterSpacing="-0.01rem"
        fontWeight="bold"
        mb="1.1rem"
        color="black.600"
        textAlign="center"
      >
        Campinas
      </Text>
      <Text
        fontSize="1.2rem"
        letterSpacing="-0.01rem"
        fontWeight="bold"
        mb="1.1rem"
        color="black.600"
        textAlign="center"
      >
        São Paulo
      </Text>
      <Text
        fontSize="1.2rem"
        letterSpacing="-0.01rem"
        fontWeight="bold"
        mb="1.1rem"
        color="black.600"
        textAlign="center"
      >
        Rio de Janeiro
      </Text>
    </Flex>
  );
}
