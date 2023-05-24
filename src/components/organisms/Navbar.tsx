import { Flex, Square, Center, Text, Box } from '@chakra-ui/react';
import { NavbarItem } from '#/components/molecules/NavbarItem';

const Navbar = () => {
    const path = process.env.NODE_ENV === 'production' ? '/home/' : '/';
    return (
        <>
            <Flex
                px={30}
                py={5}
                bg="black"
                justify="space-between"
                color="white"
                fontSize={30}
            >                    <NavbarItem
                    label="home"
                    href={path + 'home'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#contact'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#contact'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#contact'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#contact'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#contact'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#contact'}
                />{' '}
            </Flex>
        </>
    );
};

export default Navbar;
