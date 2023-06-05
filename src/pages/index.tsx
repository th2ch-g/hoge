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
import { GrHome } from 'react-icons/gr';
import { AiFillCode } from 'react-icons/ai';
import { SiMicrogenetics } from 'react-icons/si';
import { GiBottomRight3DArrow } from 'react-icons/gi';
import { VscTools } from 'react-icons/vsc';
import { GiSkills } from 'react-icons/gi';
import NextLink from 'next/link';
import { WorksCard } from '#/components/molecules/WorksCard';

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
                    id="top"
                >
                    th2ch-g
                </Box>

                <Box textAlign="center">
                    {' '}
                    Bioinformatics, MD simulation, Genome analysis, Wasabi{' '}
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
                    scrollMargin={50}
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
                        <ListItem>
                            <ListIcon
                                as={AiFillCode}
                                color="darkolivegreen"
                                boxSize={25}
                            />
                            Rust, Python, C++, Typescript, LaTeX, Vim, Git,
                            Docker, UNIX, Supercomputer
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={SiMicrogenetics}
                                color="darkolivegreen"
                                boxSize={25}
                            />
                            Genome analysis, Genome assemble, Gene annotation,
                            Expression analysis
                        </ListItem>
                        <ListItem>
                            <ListIcon
                                as={GiBottomRight3DArrow}
                                color="darkolivegreen"
                                boxSize={25}
                            />
                            MD simulation, GROMACS, AMBER, VMD, ChimeraX,
                            MDtraj, QMMM
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
                    scrollMargin={50}
                >
                    <Icon
                        as={VscTools}
                        boxSize={45}
                    />{' '}
                    Works{' '}
                </Box>

                <Box
                    textAlign="center"
                    fontSize={15}
                    marginY={5}
                >
                    See CV for detailed information about my research such as
                    papers, presentations, etc.
                </Box>

                <WorksCard
                    url="https://th2ch-g.github.io/home/"
                    header="Home page"
                    alt_string={alt_string}
                    image_path={path + 'works/home.png'}
                >
                    I created this web site in Typescirpt for my portfolio,
                    using mainly React and Chakra. Thanks{' '}
                    <ChakraLink
                        color="blue.500"
                        as={NextLink}
                        href="https://github.com/calliope-pro"
                        target="_blank"
                    >
                        @calliope
                    </ChakraLink>{' '}
                    for the advice.
                </WorksCard>

                <WorksCard
                    url="https://github.com/th2ch-g/rust-top_message/"
                    header="rust-top_message"
                    alt_string={alt_string}
                    image_path="https://github.com/th2ch-g/rust-top_message/blob/main/img/logo.png?raw=true"
                >
                    This is super useless CLI tool created originally to prank
                    seniors on the lab server. It eats your computing resources
                    using parallel computing. This logo was created by a
                    graduating senior 10min. You can also use this tool on
                    multiple nodes because MPI is also available.
                </WorksCard>

                <WorksCard
                    url="https://github.com/th2ch-g/dotfiles"
                    header="dotfiles"
                    alt_string={alt_string}
                    image_path={path + 'works/dotfiles.png'}
                >
                    This is a repository of my settings. This has been very
                    helpful because I use several supercomputers in my research.
                    It is also used by juniors in the lab and is well received.
                </WorksCard>

                <WorksCard
                    url="https://scholar-1-e4000274.deta.app/"
                    header="Scholarship search site for TokyoTech"
                    alt_string={alt_string}
                    image_path={path + 'works/Scholarship.png'}
                >
                    Tokyo Tech scholarship website was so difficult to use that{' '}
                    <ChakraLink
                        color="blue.500"
                        as={NextLink}
                        href="https://github.com/calliope-pro"
                        target="_blank"
                    >
                        @calliope
                    </ChakraLink>{' '}
                    and I created it together. By the way, this site failed in
                    the google adsense screening.
                </WorksCard>

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
