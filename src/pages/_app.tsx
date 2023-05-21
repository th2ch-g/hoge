import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { Box, ChakraProvider, Container, Stack } from '@chakra-ui/react';
import ZZprovider from '#/providers/MDXprovider';
import Navbar from '../components/organisms/Navbar';
import Footer from '#/components/organisms/Footer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <ZZprovider>
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
            </ZZprovider>
        </ChakraProvider>
    );
}
