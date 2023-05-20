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
                <Text> th2ch-g</Text>
            </Box>
            <Flex gap={{ base: 30, sm: 100 }}>
                <NavbarItem
                    label="Home"
                    href="/"
                />{' '}
                <NavbarItem
                    label="Blog"
                    href="/xxx"
                />{' '}
            </Flex>
        </Flex>
    );
};

export default Navbar;
