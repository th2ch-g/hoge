import { Flex, Square, Center, Text, Box, GridItem, Grid, Card, SimpleGrid, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
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
            >
                <NavbarItem
                    label="top"
                    href={path + '#top'}
                />{' '}
                <NavbarItem
                    label="bio"
                    href={path + '#bio'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#works'}
                />{' '}
                <NavbarItem
                    label="contact"
                    href={path + '#contact'}
                />{' '}
            </Flex>
        </>
    );
};

export default Navbar;
