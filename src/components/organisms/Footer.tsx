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
                        href="home"
                    />{' '}
                    <NavbarItem
                        label="blog"
                        href="blog"
                    />{' '}
                    <NavbarItem
                        label="works"
                        href="works"
                    />{' '}
                    <NavbarItem
                        label="research"
                        href="research"
                    />{' '}
                    <NavbarItem
                        label="photo"
                        href="photo"
                    />{' '}
                    <NavbarItem
                        label="memo"
                        href="memo"
                    />{' '}
                </Flex>
                <Text fontSize={15}> ©2023 - th2ch-g </Text>
            </Box>
            <Flex gap={{ base: 30, sm: 100 }}></Flex>
        </Flex>
    );
};

export default Footer;
