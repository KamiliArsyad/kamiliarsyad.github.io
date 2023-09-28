import React, { ReactElement } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

/**
 * PageSpan Props Interface.
 * @interface PageSpanProps
 * @public
 */
interface PageSpanProps {
  /**
   * PageSpan heading.
   */
  heading: string;

  /**
   * PageSpan brief.
   */
  brief: string;

  /**
   * PageSpan image.
   */
  image: string;

  /**
   * PageSpan background color.
   */
  backgroundColor: string;

  /**
   * PageSpan onClick function.
   * @returns {void}
   */
  onClick?: () => void;

  /**
   * The mode of the PageSpan.
   */
  isDesktop?: boolean;

  /**
   * The relative path to redirect to when clicking the button.
   */
  redirect?: { relativepath: string; title: string };

  /**
   * The popup content.
   */
  popupContent?: { title: string; content: ReactElement };
}

/**
 * PageSpan Component.
 * @param {PageSpanProps} props - props.
 * @returns {ReactElement} PageSpan Component.
 */
function PageSpan(props: PageSpanProps): ReactElement<PageSpanProps> {
  const height = useBreakpointValue({ base: "lg", md: "2xl" });

  return (
    <Flex
      alignItems="center"
      justifyContent={props.isDesktop ? "space-between" : "center"}
      width="100%"
      minH={height}
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
    >
      <Container margin="5" maxW="container.xl" marginBlock="5">
        <Stack
          direction={props.isDesktop ? "row" : "column"}
          spacing={props.isDesktop ? "5" : "10"}
        >
          <Stack spacing="10">
            <Heading
              size={props.isDesktop ? "2xl" : "xl"}
              color="white"
              transition="0.3s ease-in-out"
              _hover={{ color: "yellow", transform: "scale(1.02)" }}
            >
              {props.heading}
            </Heading>
            <Heading size={props.isDesktop ? "md" : "sm"} color="white">
              {props.brief}
            </Heading>
            <Stack
              direction="row"
              justifyContent={props.isDesktop ? "none" : "center"}
              spacing="5"
            >
              {props.redirect && (
                <Button
                  colorScheme="yellow"
                  borderRadius="xl"
                  transition="0.3s ease-in-out"
                  _hover={{ backgroundColor: "white", color: "black" }}
                >
                  {props.redirect.title}
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
          <Box maxW={props.isDesktop ? "30%" : "100%"}>
            <Image
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              borderRadius="full"
              src={props.image}
            />
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}

export default PageSpan;
