import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import PageSpan from "../components/PageSpan";

// Blank page for development
export default function Dev() {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <PageSpan
      heading="Hi! I'm Arsyad Kamili"
      backgroundColor="black"
      brief="This is a dev brief. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."
      image="https://avatars.githubusercontent.com/u/22293969?v=4"
      isDesktop={isDesktop}
      redirect={ { relativepath: "/", title: "Learn More" } }
      popupContent={ { title: "What I do", content: "Popup content" } }
    />
  );
}
