import { extendTheme } from "@chakra-ui/react";

export const colors = {
    yellow: {
        300: '#dd9735',
        500: '#dd9837ff'
    },
    orange: {
        500: '#cb6c31'
    },
    black: {
        600: '#444849'
    }
};

export const theme = extendTheme({
    colors,
    fonts: {
        heading: "Roboto",
        body: "Roboto",
    }
});