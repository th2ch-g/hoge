import { Flex, Square, Center, Text, Box } from '@chakra-ui/react';
import { NavbarItem } from '#/components/molecules/NavbarItem';

const Footer = () => {
    return (
        <Flex
            px={30}
            py={3}
            bg="black"
            justify="space-between"
            color="white"
            fontSize={20}
        >
            <Box>
                <Flex gap={{ base: 30, sm: 100 }}>
                    <NavbarItem
                        label="home"
                        href="/home/home"
                    />{' '}
                    <NavbarItem
                        label="blog"
                        href="/home/blog"
                    />{' '}
                    <NavbarItem
                        label="works"
                        href="/home/works"
                    />{' '}
                    <NavbarItem
                        label="research"
                        href="/home/research"
                    />{' '}
                    <NavbarItem
                        label="photo"
                        href="/home/photo"
                    />{' '}
                    <NavbarItem
                        label="memo"
                        href="/home/memo"
                    />{' '}
                </Flex>
                <Text fontSize={15}> ©2023 - th2ch-g </Text>
            </Box>
            <Flex gap={{ base: 30, sm: 100 }}></Flex>
        </Flex>
    );
};

export default Footer;
