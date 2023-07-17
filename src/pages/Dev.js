import { Divider, Grid, Heading, Stack, Text } from "@chakra-ui/react";

// Blank page for development
export default function Dev() {
  return (
    <Stack direction="column" align="center">
      <Heading> UNDER DEVELOPMENT </Heading>
      <Divider />
      <Text> Testing thumbnails for automatic feed from API </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      </Grid>
    </Stack>
  );
}
