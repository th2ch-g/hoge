import {
    Flex,
    Square,
    Center,
    Text,
    Box,
    GridItem,
    Grid,
    Card,
    SimpleGrid,
    CardHeader,
    CardBody,
    CardFooter,
} from '@chakra-ui/react';
import { NavbarItem } from '#/components/molecules/NavbarItem';

const Navbar = () => {
    const path = process.env.NODE_ENV === 'production' ? '/home/' : '/';
    return (
        <>
            <SimpleGrid
                px={30}
                py={3}
                bg="black"
                color="white"
                fontSize={20}
                position="fixed"
                width="full"
                columns={4}
            >
                <NavbarItem
                    label="top"
                    href={path + '/'}
                />{' '}
                <NavbarItem
                    label="bio"
                    href={path + '#bio'}
                />{' '}
                <NavbarItem
                    label="research"
                    href={path + '#research'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#works'}
                />{' '}

            </SimpleGrid>
            {/* <Flex
                px={30}
                py={3}
                bg="black"
                justify="space-between"
                color="white"
                fontSize={20}
                position="fixed"
                width="full"
            >
                <NavbarItem
                    label="top"
                    href={path + '/'}
                />{' '}
                <NavbarItem
                    label="bio"
                    href={path + '#bio'}
                />{' '}
                <NavbarItem
                    label="research"
                    href={path + '#research'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#works'}
                />{' '}
            </Flex> */}
        </>
    );
};

export default Navbar;
