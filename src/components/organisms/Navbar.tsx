import { SimpleGrid } from '@chakra-ui/react';
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
