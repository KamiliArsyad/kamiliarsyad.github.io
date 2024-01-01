// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import { styles } from "./styles";

// Foundational style overrides

// Component style overrides
import Button from "./components/button";

const Divider = {
  baseStyle: {
    borderColor: "gray.400",
  },
};

const overrides = {
  styles,
  // Other foundational style overrides go here
  components: {
    Button,
    // Other components go here
    Divider,
  },
};

export const theme = extendTheme(overrides);
