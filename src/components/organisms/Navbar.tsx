import { Flex, Square, Center, Text, Box } from '@chakra-ui/react';
import { NavbarItem } from '#/components/molecules/NavbarItem';

const Navbar = () => {
    return (
        <Flex
            px={30}
            py={5}
            bg="black"
            justify="space-between"
            color="white"
            fontSize={30}
        >
            <Box>
                <Text> th2ch-g HP</Text>
            </Box>
            <Flex gap={{ base: 30, sm: 100 }}>
                <NavbarItem
                    label="home"
                    href="/home/home"
                />{' '}
                <NavbarItem
                    label="blog"
                    href="/home/blog"
                />{' '}
            </Flex>
        </Flex>
    );
};

export default Navbar;
