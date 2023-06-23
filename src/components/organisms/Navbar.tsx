import { Menu, MenuButton, MenuItem, MenuList, Box, SimpleGrid } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { VscTools } from 'react-icons/vsc';
import { GiSkills } from 'react-icons/gi';
import { GrHome } from 'react-icons/gr';
import { NavbarItem } from '../molecules/NavbarItem';

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
                zIndex={10}
            >
                <NavbarItem
                    label="home"
                    href={path}
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
