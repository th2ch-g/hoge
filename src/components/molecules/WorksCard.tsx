import Image from 'next/image';
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Center,
    Link as ChakraLink,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export const WorksCard = ({
    url,
    header,
    alt_string,
    image_path,
    content,
}: {
    url: string;
    header: string;
    alt_string: string;
    image_path: string;
    content: string;
}) => {
    return (
        <Box marginY={5}>
            <Card bg="whitesmoke">
                <CardHeader
                    textAlign="center"
                    fontSize={30}
                >
                    <ChakraLink
                        color="darkolivegreen"
                        fontFamily="heading"
                        as={NextLink}
                        href={url}
                        target="_blank"
                    >
                        {header}
                    </ChakraLink>
                </CardHeader>
                <CardBody>
                    <Center>
                        <Image
                            src={image_path}
                            width={400}
                            height={200}
                            alt={alt_string}
                        />
                    </Center>
                    <Box marginY={5}>{content}</Box>
                </CardBody>
            </Card>
        </Box>
    );
};
