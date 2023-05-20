import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import {
    Code,
    Box,
    AspectRatio,
    BoxProps,
    Image,
    ImgProps,
    ListItem,
    ListItemProps,
    ListProps,
    OrderedList,
    Text,
    TextProps,
    UnorderedList,
    CodeProps,
} from '@chakra-ui/react';

const components: MDXComponents = {
    h1(props: TextProps) {
        return (
            <Text
                fontSize="4xl"
                {...props}
            />
        );
    },
    h2(props: TextProps) {
        return (
            <Text
                fontSize="xl"
                {...props}
            />
        );
    },
    h3(props: TextProps) {
        return (
            <Text
                fontSize="large"
                {...props}
            />
        );
    },
    h4(props: TextProps) {
        return (
            <Text
                fontSize="medium"
                {...props}
            />
        );
    },
    h5(props: TextProps) {
        return (
            <Text
                fontSize="small"
                {...props}
            />
        );
    },
    h6(props: TextProps) {
        return (
            <Text
                fontSize="xs"
                {...props}
            />
        );
    },
    ul(props: ListProps) {
        return <UnorderedList {...props} />;
    },
    ol(props: ListProps) {
        return <OrderedList {...props} />;
    },
    li(props: ListItemProps) {
        return <ListItem {...props} />;
    },
    img(props: ImgProps) {
        return (
            <Image
                {...props}
                objectFit="cover"
                maxH={100}
            />
        );
    },
    p(props: BoxProps) {
        return <Box {...props} />;
    },
    code(props: CodeProps) {
        return (
            <Code
                {...props}
                w="full"
            />
        );
    },
};

const ZZprovider = ({ children }: { children: React.ReactNode }) => {
    return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default ZZprovider;
