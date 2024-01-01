import React, { ReactElement } from "react";
import { Box, Collapse, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import { DrawerItem, DrawerItemProps } from "../DrawerItem";

interface BlogDrawerProps {
  isOpen: boolean;
  onClose?: () => void;
  content?: DrawerItemProps[];
}

function BlogDrawer(props: BlogDrawerProps): ReactElement<BlogDrawerProps> {
  const { isOpen, content } = props;

  return (
    <Box w="100%" overflowY="scroll">
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing={3} align="center" padding="10px">
          <Heading size="lg">Check out my latest posts!</Heading>
          <Divider />
          {content?.map((item, index) => (
            <DrawerItem
              key={index}
              title={item.title}
              tags={item.tags}
              image={item.image}
              navigation={item.navigation}
              preview={item.preview}
            />
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
}

export { BlogDrawer };
