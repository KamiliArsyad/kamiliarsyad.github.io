import React, { ReactElement } from "react";
import { Box, Collapse, Flex, Stack } from "@chakra-ui/react";
import { DrawerItem, DrawerItemProps } from "../DrawerItem";

interface BlogDrawerProps {
  isOpen: boolean;
  onClose?: () => void;
  content?: DrawerItemProps[];
}

function BlogDrawer(props: BlogDrawerProps): ReactElement<BlogDrawerProps> {
  const { isOpen, content } = props;

  return (
    <Box w="100%" overflowY="scroll" style={{ position: "fixed" }}>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing={3} align="normal" padding="10px">
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
