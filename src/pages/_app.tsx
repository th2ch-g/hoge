import type { AppProps } from 'next/app';
import { Box, ChakraProvider, Container, Stack } from '@chakra-ui/react';

import Navbar from '../components/organisms/Navbar';
import Footer from '#/components/organisms/Footer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Stack minH="100vh">
                <Navbar />
                <Box flexGrow={1}>
                    <Container
                        maxW="container.md"
                        color={'blackAlpha.900'}
                    >
                        <Component {...pageProps} />
                    </Container>
                </Box>
                <Footer />
            </Stack>
        </ChakraProvider>
    );
}
