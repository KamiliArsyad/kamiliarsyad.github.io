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
  redirect?: string;

  /**
   * The popup content.
   */
  popupContent?: any;
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
        <Stack direction={props.isDesktop ? "row" : "column"} spacing="5">
          <Stack spacing="10">
            <Heading size={props.isDesktop ? "2xl" : "xl"} color="white">
              {props.heading}
            </Heading>
            <Heading size={props.isDesktop ? "md" : "sm"} color="white">
              {props.brief}
            </Heading>
            <Stack direction="row" justifyContent={props.isDesktop ? "none" : "center"} spacing="5">
              <Button colorScheme="white" borderRadius="full" outlineColor="white">
                Learn More
              </Button>
              <Button colorScheme="white" borderRadius="full" outlineColor="white">
                Get Started
              </Button>
            </Stack>
          </Stack>
          <Box>
            <Image src={props.image} />
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}

export default PageSpan;
