import {
    SimpleGrid,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Box,
} from '@chakra-ui/react';
import { NavbarItem } from '#/components/molecules/NavbarItem';
import { IconButton } from '@chakra-ui/button';
import {
    HamburgerIcon,
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon,
} from '@chakra-ui/icons';

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
                            icon={<AddIcon />}
                            bgColor="darkolivegreen"
                        >
                            <NavbarItem
                                label="top"
                                href={path}
                            />
                        </MenuItem>
                        <MenuItem
                            icon={<ExternalLinkIcon />}
                            bgColor="darkolivegreen"
                        >
                            <NavbarItem
                                label="skill"
                                href={path + '#skill'}
                            />
                        </MenuItem>
                        <MenuItem
                            icon={<RepeatIcon />}
                            bgColor="darkolivegreen"
                        >
                            <NavbarItem
                                label="works"
                                href={path + '#works'}
                            />
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            {/* <SimpleGrid
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
                    label="top"
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
            </SimpleGrid> */}
        </>
    );
};

export default Navbar;
