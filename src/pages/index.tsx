import { Box, Center, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../assets/propz-logo.svg";
import Gift from "../assets/gifit.png";
import Carrocel from "@/component/Carrocel";
import CardPropz from "@/component/CardPropz";
import Offer from "../../offers.json";

export default function Home() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <>
      <main>
        <Center my="2.25rem">
          <Text
            bgGradient="linear(to-r, yellow.300, orange.500)"
            bgClip="text"
            fontSize="3.5rem"
            fontWeight="bold"
            letterSpacing="0.125rem"
          >
            BELEZA
          </Text>
        </Center>
        <Center>
          <Image priority src={Logo} alt="Propz" width={150} />
        </Center>
        <Image
          priority
          src={Gift}
          alt="gift"
          style={{ width: "100%", height: isMobile ? "auto" : "10rem" }}
        />
        <Box
          fontSize="1.4rem"
          letterSpacing="0.025rem"
          color="black.600"
          textAlign="center"
          fontWeight="bold"
          mb="2.25rem"
        >
          <Center mb="0.5rem">
            <Text maxW="38.75rem">
              As lojas Propz agora possuem um espaço beleza onde você encontra
              tudo para montar looks únicos
            </Text>
          </Center>
          <Center>
            <Text maxW="38.75rem">Venha Conhecer</Text>
          </Center>
        </Box>
        <Carrocel offer={Offer} />
        <Center mb="3rem">
          <CardPropz />
        </Center>
        <Center>
          <Image priority src={Logo} alt="Propz" width={100} />
        </Center>
        <Center my="1.5rem" px="1rem">
          <Text color="black.600" textAlign="center" fontSize="0.7rem">
            Propz S.A. Central de Atendimento - Consultas, informações e
            serviços transacionais: 45544-0097 (capitais e regiões
            metropolitanas) e 0800 778 5658 (demais localidades), atendimento de
            segunda a sábado, das 8h às 22h, exceto feriados. SAC Propz --
            Reclamações, cancelamentos e informações gerais: 0800 985 9365.
            Deficiência auditiva ou de fala: 0800 722 0088 (atendimento 24horas,
            7 dias por semana). Ouvidoria -- Demandas não solucionadas pelos
            demais Canais de Atendimento: 0800 727 9599 (atendimento de segunda
            a sexta-feira, das 8h às 18h, exceto feriados)
          </Text>
        </Center>
      </main>
    </>
  );
}
