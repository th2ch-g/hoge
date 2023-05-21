import { Flex, Square, Center, Text, Box } from '@chakra-ui/react';
import { NavbarItem } from '#/components/molecules/NavbarItem';

const Footer = () => {
    const path = process.env.NODE_ENV === 'production' ? '/home/' : '/';
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
                        href={path + 'home'}
                    />{' '}
                    <NavbarItem
                        label="works"
                        href={path + 'works'}
                    />{' '}
                    <NavbarItem
                        label="blog"
                        href={path + 'blog'}
                    />{' '}
                </Flex>
                <Text fontSize={15}> ©2023 - th2ch-g </Text>
            </Box>
            <Flex gap={{ base: 30, sm: 100 }}></Flex>
        </Flex>
    );
};

export default Footer;
