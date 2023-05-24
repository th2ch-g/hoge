import Head from 'next/head';
import Image from 'next/image';
import { Noto_Sans_JP } from 'next/font/google';
import {
    Stack,
    Box,
    Icon,
    SimpleGrid,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Center,
    Spacer
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { GoLogoGist } from 'react-icons/go';

const notoSanJP = Noto_Sans_JP({ subsets: ['latin'] });

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
                    href="/icon.jpg"
                />
            </Head>

            <Box className={notoSanJP.className} marginY={10}>
                <Box
                    textAlign="center"
                    fontSize={50}
                    id="top"
                >
                    th2ch-g
                </Box>

                <Box textAlign="center"> Bioinformatics, MD simulation, Genome analysis </Box>

                <Center>
                    <Stack direction={'row'}>
                        <Icon
                            as={AiFillGithub}
                            boxSize={50}
                            href='https://github.com/th2ch-g'
                        />
                        <Icon
                            as={GoLogoGist}
                            boxSize={50}
                            href="https://gist.github.com/th2ch-g"
                        />
                    </Stack>
                </Center>

                <Center marginY={10}>
                    <Image
                        src="/tmp2.jpg"
                        width={400}
                        height={200}
                        alt="Figure not found"
                    />
                </Center>

                <Box
                    textAlign="center"
                    fontSize={50}
                    id="bio"
                >
                    Biography
                </Box>



                <Box
                    textAlign="center"
                    fontSize={50}
                    id="works"
                >
                    Works
                </Box>

                <SimpleGrid
                    columns={2}
                    marginTop={10}
                    spacing={100}
                >
                    <Box>
                        <Card>
                            <CardBody>aldsjfhla;sdkjfha;ldsjhf</CardBody>
                        </Card>
                    </Box>
                    <Box>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                src='https://github.com/th2ch-g/rust-top_message/blob/main/img/logo.png'
                                width={100}
                                height={100}
                                alt='Image not found'
                            />

                            <Stack>
                                <CardBody>

                                </CardBody>

                                <CardFooter>

                                </CardFooter>
                            </Stack>
                        </Card>
                    </Box>
                    <Box>a;kjsdhf;aksjdhf;akjdshf</Box>
                    <Box>a;kjsdhf;aksjdhf;akjdshf</Box>
                    <Box>a;kjsdhf;aksjdhf;akjdshf</Box>
                    <Box>a;kjsdhf;aksjdhf;akjdshf</Box>
                </SimpleGrid>

                <Box
                    textAlign="center"
                    fontSize={50}
                    id="contact"
                    marginY={10}
                >
                    Contact
                </Box>

                <Box textAlign="center">email: </Box>
            </Box>
        </>
    );
}
