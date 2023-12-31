import "../styles/global.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
