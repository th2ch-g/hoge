import { Box, ChakraProvider, Container, Stack } from '@chakra-ui/react';
import ZZprovider from '#/providers/MDXprovider';
import Navbar from '../components/organisms/Navbar';
import Footer from '#/components/organisms/Footer';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const path = useMemo(
        () => (router.isReady ? router.pathname : ''),
        [router]
    );
    const content = useMemo(() => {
        if (path === '/th2ch-g-page') {
            return (
                <ZZprovider>
                    <Stack minH="100vh">
                        <Navbar />
                        <Box flexGrow={1}>
                            <Container maxW="container.md">
                                {children}
                            </Container>
                        </Box>
                        <Footer />
                    </Stack>
                </ZZprovider>
            );
        } else {
            return <Box>hello</Box>;
        }
    }, [router, children]);

    return content;
};
