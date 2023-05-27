import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

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
            _hover={{ color: 'darkolivegreen', fontWeight: '500' }}
            textAlign="center"
        >
            {label}
        </ChakraLink>
    );
};
