import { Flex, Square, Center, Text, Box } from '@chakra-ui/react';
import { NavbarItem } from '#/components/molecules/NavbarItem';

const Navbar = () => {
    const path = process.env.NODE_ENV === 'production' ? '/home/' : '/';
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
                    href={path + 'home'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + 'works'}
                />{' '}
            </Flex>
        </Flex>
    );
};

export default Navbar;
