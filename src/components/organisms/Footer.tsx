import { Flex, Square, Center, Text, Box } from '@chakra-ui/react';
import { NavbarItem } from '#/components/molecules/NavbarItem';
import { AiFillExclamationCircle } from 'react-icons/ai';

const Footer = () => {
    const path = process.env.NODE_ENV === 'production' ? '/home/' : '/';
    return (
        <Box
            textAlign="center"
            bg="black"
            color="white"
            paddingY={30}
        >
            ©2023 - th2ch-g
        </Box>
    );
};

export default Footer;
