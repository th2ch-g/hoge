import { Menu, MenuButton, MenuItem, MenuList, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { VscTools } from 'react-icons/vsc';
import { GiSkills } from 'react-icons/gi';
import { GrHome } from 'react-icons/gr';

const Navbar = () => {
    const path = process.env.NODE_ENV === 'production' ? '/home/' : '/';
    return (
        <>
            <Box
                px={30}
                py={3}
                bg="black"
                color="white"
                fontSize={20}
                position="fixed"
                width="full"
                zIndex={10}
            >
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<HamburgerIcon />}
                        variant="outline"
                        bgColor="darkolivegreen"
                        textColor="black"
                        colorScheme="white"
                        boxSize={50}
                    />
                    <MenuList bgColor="black">
                        <MenuItem
                            icon={<GrHome />}
                            bgColor="darkolivegreen"
                            as={NextLink}
                            href={path}
                        >
                            home
                        </MenuItem>
                        <MenuItem
                            icon={<GiSkills />}
                            bgColor="darkolivegreen"
                            as={NextLink}
                            href={path + '#skill'}
                        >
                            skill
                        </MenuItem>
                        <MenuItem
                            icon={<VscTools />}
                            bgColor="darkolivegreen"
                            as={NextLink}
                            href={path + '#works'}
                        >
                            works
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </>
    );
};

export default Navbar;
