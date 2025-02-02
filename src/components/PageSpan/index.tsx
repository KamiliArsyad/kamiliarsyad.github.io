import React, { ReactElement, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  LinkBox,
  Stack,
  Fade,
  Skeleton,
  useBreakpointValue,
} from "@chakra-ui/react";

interface PageSpanProps {
  heading: string;
  brief: string;
  image: string;
  backgroundColor: string;
  onClick?: () => void;
  isDesktop?: boolean;
  redirect?: { relativepath: string; title: string };
  popupContent?: { title: string; content: ReactElement };
}

function PageSpan(props: PageSpanProps): ReactElement<PageSpanProps> {
  const height = useBreakpointValue({ base: "lg", md: "2xl" });
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      minH={height}
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
    >
      <Fade in transition={{ enter: { duration: 0.6 } }}>
        <Container maxW="container.xl" px={5} py={5}>
          <Stack
            direction={props.isDesktop ? "row" : "column"}
            spacing={props.isDesktop ? "5" : "10"}
          >
            <Stack spacing={props.isDesktop ? "10" : "5"} flex={props.isDesktop ? 7 : 1}>
              <Heading
                size={props.isDesktop ? "2xl" : "xl"}
                color="white"
                transition="0.2s ease-in-out"
                _hover={{ color: "yellow", transform: "scale(1.02)" }}
              >
                {props.heading}
              </Heading>
              {props.brief}
              <Stack
                direction="row"
                justifyContent={props.isDesktop ? "flex-start" : "center"}
                spacing="5"
              >
                {props.redirect && (
                  <Button
                    colorScheme="yellow"
                    borderRadius="xl"
                    transition="0.3s ease-in-out"
                    _hover={{ backgroundColor: "white", color: "black" }}
                  >
                    <LinkBox as={Link} href={props.redirect.relativepath}>
                      {props.redirect.title}
                    </LinkBox>
                  </Button>
                )}
                {props.popupContent && (
                  <Button
                    colorScheme="cyan"
                    borderRadius="xl"
                    transition="0.3s ease-in-out"
                    _hover={{ backgroundColor: "white", color: "black" }}
                  >
                    {props.popupContent.title}
                  </Button>
                )}
              </Stack>
            </Stack>
            <Box flex={props.isDesktop ? 3 : 1}>
              <Skeleton isLoaded={isImageLoaded} fadeDuration={0.6}>
                <Image
                  transition="0.3s ease-in-out"
                  _hover={{ transform: "scale(1.05)" }}
                  borderRadius="full"
                  src={props.image}
                  onLoad={() => setImageLoaded(true)}
                />
              </Skeleton>
            </Box>
          </Stack>
        </Container>
      </Fade>
    </Flex>
  );
}

export default PageSpan;
