import React, { ReactElement } from "react";
import { Flex, Heading } from "@chakra-ui/react";

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
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      backgroundColor={props.backgroundColor}
      onClick={props.onClick}
    >
      <Heading as="h1" size={props.isDesktop ? "4xl" : "2xl"} color="white">
        {props.heading}
      </Heading>
    </Flex>
  );
}

export default PageSpan;
