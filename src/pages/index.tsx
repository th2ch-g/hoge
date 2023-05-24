import Head from 'next/head';
import Image from 'next/image';
import { Noto_Sans_JP } from 'next/font/google';
import { Stack, Box, Icon, SimpleGrid, Card, CardBody, CardHeader, CardFooter } from '@chakra-ui/react';
import { AiFillGithub } from "react-icons/ai"

const notoSanJP = Noto_Sans_JP({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title> th2ch-g HP </title>
                <meta
                    name="description"
                    content="th2ch-g HP"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>

            <Box className={notoSanJP.className}>

                <Box textAlign="center" fontSize={100}>
                    th2ch-g
                </Box>

                <Image src="" width={100} height={100} alt="Figure not found" />

                <Stack direction={'row'}>

                    <Icon as={AiFillGithub} boxSize={100}/>
                    <Icon as={AiFillGithub} boxSize={100}/>
                    <Icon as={AiFillGithub} boxSize={100}/>

                </Stack>


                <SimpleGrid columns={2} marginTop={10} spacing={100}>
                    <Box>
                        <Card>
                            <CardBody>
                                aldsjfhla;sdkjfha;ldsjhf
                            </CardBody>
                        </Card>
                    </Box>
                    <Box>
                        a;kjsdhf;aksjdhf;akjdshf
                    </Box>
                    <Box>
                        a;kjsdhf;aksjdhf;akjdshf
                    </Box>
                    <Box>
                        a;kjsdhf;aksjdhf;akjdshf
                    </Box>
                    <Box>
                        a;kjsdhf;aksjdhf;akjdshf
                    </Box>
                    <Box>
                        a;kjsdhf;aksjdhf;akjdshf
                    </Box>
                </SimpleGrid>


                <Box textAlign="center" fontSize={100} id='contact'>
                    Contact 
                </Box>

                <Box textAlign="center">
                    Contact
                </Box>

            </Box>
        </>
    );
}
