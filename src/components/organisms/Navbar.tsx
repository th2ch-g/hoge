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
                columns={3}
            >
                <NavbarItem
                    label="top"
                    href={path + '/'}
                />{' '}
                <NavbarItem
                    label="skill"
                    href={path + '#skill'}
                />{' '}
                <NavbarItem
                    label="works"
                    href={path + '#works'}
                />{' '}
            </SimpleGrid>
        </>
    );
};

export default Navbar;
