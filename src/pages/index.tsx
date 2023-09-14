import Head from 'next/head';
import Image from 'next/image';
import { Noto_Sans_JP } from 'next/font/google';
import {
    Stack,
    Box,
    Icon,
    Center,
    List,
    ListItem,
    ListIcon,
    Link as ChakraLink,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { GoLogoGist } from 'react-icons/go';
import { FaKaggle } from 'react-icons/fa';
import { GrHome } from 'react-icons/gr';
import { AiFillCode } from 'react-icons/ai';
import { SiMicrogenetics } from 'react-icons/si';
import { GiBottomRight3DArrow } from 'react-icons/gi';
import { AiFillLinkedin } from 'react-icons/ai';
import { VscTools } from 'react-icons/vsc';
import { GiSkills } from 'react-icons/gi';
import NextLink from 'next/link';
import { UnorderedList } from '@chakra-ui/react';

const notoSanJP = Noto_Sans_JP({ subsets: ['latin'] });

export default function Home() {
    const path = process.env.NODE_ENV === 'production' ? '/home/' : '/';
    const alt_string = 'Image not found';
    return (
        <>
            <Head>
                <title> th2ch-g HP </title>
                <meta
                    name="description"
                    content="th2ch-g home"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href={path + 'wasabi.jpg'}
                />
                <meta
                    property="og:image"
                    content={path + 'og_image.jpg'}
                />
            </Head>

            <Box
                className={notoSanJP.className}
                marginY={100}
            >
                {/* TOP */}
                <Box
                    textAlign="center"
                    fontSize={50}
                    id="home"
                >
                    th2ch-g
                </Box>

                <Box textAlign="center">
                    {' '}
                    Bioinformatics, MD simulation, Genome analysis, Wasabi, GPCR{' '}
                </Box>

                <Center marginY={5}>
                    <Stack direction={'row'}>
                        <NextLink
                            href="https://th2ch-g.github.io/home/"
                            target="_blank"
                        >
                            <Icon
                                as={GrHome}
                                boxSize={50}
                            />
                        </NextLink>
                        <NextLink
                            href="https://github.com/th2ch-g"
                            target="_blank"
                        >
                            <Icon
                                as={AiFillGithub}
                                boxSize={50}
                            />
                        </NextLink>
                        <NextLink
                            href="https://gist.github.com/th2ch-g"
                            target="_blank"
                        >
                            <Icon
                                as={GoLogoGist}
                                boxSize={50}
                            />
                        </NextLink>
                        <NextLink
                            href="https://www.linkedin.com/in/wsbff662107283/"
                            target="_blank"
                        >
                            <Icon
                                as={AiFillLinkedin}
                                boxSize={50}
                            />
                        </NextLink>
                        <NextLink
                            href="https://www.kaggle.com/lst1923"
                            target="_blank"
                        >
                            <Icon
                                as={FaKaggle}
                                boxSize={45}
                            />
                        </NextLink>
                    </Stack>
                </Center>

                <Center>
                    <Image
                        src={path + 'daiowasabi1.jpg'}
                        width={400}
                        height={200}
                        alt={alt_string}
                    />
                </Center>
                <Box textAlign="center">
                    Taken by th2ch-g at{' '}
                    <ChakraLink
                        color="blue.500"
                        as={NextLink}
                        href="https://www.daiowasabi.co.jp/"
                        target="_blank"
                    >
                        Daiowasabi
                    </ChakraLink>
                </Box>

                {/* Skill */}
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize={50}
                    id="skill"
                    marginY={5}
                    scrollMargin={70}
                >
                    <Icon
                        as={GiSkills}
                        boxSize={45}
                    />
                    Skill
                </Box>

                <Center marginY={5}>
                    <List
                        spacing={3}
                        fontSize={15}
                    >
                        <ListItem
                            display="flex"
                            alignItems="center"
                        >
                            <ListIcon
                                as={AiFillCode}
                                color="darkolivegreen"
                                boxSize={25}
                            />
                            Rust, Python, (C++, Typescript,) LaTeX, Vim, Git,
                            UNIX, HPC, Docker
                        </ListItem>
                        <ListItem
                            display="flex"
                            alignItems="center"
                        >
                            <ListIcon
                                as={SiMicrogenetics}
                                color="darkolivegreen"
                                boxSize={25}
                            />
                            Genome analysis, Genome assemble, Gene annotation,
                            Expression analysis
                        </ListItem>
                        <ListItem
                            display="flex"
                            alignItems="center"
                        >
                            <ListIcon
                                as={GiBottomRight3DArrow}
                                color="darkolivegreen"
                                boxSize={25}
                            />
                            MD simulation, GROMACS, AMBER, VMD, ChimeraX,
                            MDtraj, PyEMMA, QMMM
                        </ListItem>
                    </List>
                </Center>

                {/* Works */}
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize={50}
                    id="works"
                    marginY={30}
                    scrollMargin={70}
                >
                    <Icon
                        as={VscTools}
                        boxSize={45}
                    />{' '}
                    Works{' '}
                </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize={30}
                >
                    Research{' '}
                </Box>
                <Center>
                    <UnorderedList
                        spacing={2}
                        fontSize={15}
                    >
                        <ListItem>
                            Genome assembly and analysis of wasabi{' '}
                            <ChakraLink
                                color="blue.500"
                                as={NextLink}
                                href="https://doi.org/10.1038/s41597-023-02356-z"
                                target="_blank"
                            >
                                [link]
                            </ChakraLink>{' '}
                        </ListItem>
                    </UnorderedList>
                </Center>

                <Box marginY={30}> </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize={30}
                >
                    Tool{' '}
                </Box>
                <Center>
                    <UnorderedList
                        spacing={2}
                        fontSize={15}
                    >
                        <ListItem>
                            rust-top_message
                            <ChakraLink
                                color="blue.500"
                                as={NextLink}
                                href="https://github.com/th2ch-g/rust-top_message"
                                target="_blank"
                            >
                                [link]
                            </ChakraLink>{' '}
                        </ListItem>
                        <ListItem>
                            tmplot.py{' '}
                            <ChakraLink
                                color="blue.500"
                                as={NextLink}
                                href="https://github.com/th2ch-g/tmplot.py"
                                target="_blank"
                            >
                                [link]
                            </ChakraLink>{' '}
                        </ListItem>
                        <ListItem>
                            TokyoTech Scholar web site
                            <ChakraLink
                                color="blue.500"
                                as={NextLink}
                                href="https://scholar-1-e4000274.deta.app/"
                                target="_blank"
                            >
                                [link]
                            </ChakraLink>{' '}
                        </ListItem>
                    </UnorderedList>
                </Center>

                <Box
                    textAlign="center"
                    marginY={10}
                >
                    For other works, please visit{' '}
                    <ChakraLink
                        color="blue.500"
                        as={NextLink}
                        href="https://github.com/th2ch-g"
                        target="_blank"
                    >
                        github
                    </ChakraLink>{' '}
                    and other sites.
                </Box>
            </Box>
        </>
    );
}
