import {
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

export default function CategoryFilter({ categories, selectedCategories, onChange }) {
  const popoverBg = useColorModeValue("gray.50", "gray.700");
  return (
    <Popover closeOnBlur>
      <PopoverTrigger>
        <Button colorScheme="teal">Filter Categories</Button>
      </PopoverTrigger>
      <PopoverContent bg={popoverBg} boxShadow="md">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold">Categories</PopoverHeader>
        <PopoverBody>
          <CheckboxGroup value={selectedCategories} onChange={onChange}>
            <Stack>
              {categories.map((cat) => (
                <Checkbox key={cat} value={cat}>
                  {cat}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          <Button mt={4} size="sm" variant="outline" onClick={() => onChange([])}>
            Clear
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
