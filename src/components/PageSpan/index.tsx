import React, { ReactElement } from "react";

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
  const {
    heading,
    brief,
    image,
    backgroundColor,
    onClick,
    isDesktop,
    redirect,
    popupContent,
  } = props;

  return (
    <h1>
      {heading}
    </h1>
  )
}

export default PageSpan;
