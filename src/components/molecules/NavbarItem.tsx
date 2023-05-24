import NextLink from 'next/link';
import {
    Flex,
    Square,
    Center,
    Text,
    Box,
    Link as ChakraLink,
} from '@chakra-ui/react';

export const NavbarItem = ({
    label,
    href,
}: {
    label: string;
    href: string;
}) => {
    return (
        <ChakraLink
            as={NextLink}
            href={href}
            _hover={{color: "pink", fontWeight: "500"}}
        >
            {label}
        </ChakraLink>
    );
};
