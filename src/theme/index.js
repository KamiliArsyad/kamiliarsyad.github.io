// theme/index.js
import { extendTheme } from "@chakra-ui/react";
import '@fontsource/ibm-plex-sans';
import '@fontsource/open-sans';
import '@fontsource/open-sans/700.css';

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
  fonts: {
    heading: "Open Sans",
    body: "IBM Plex Sans",
  },
  components: {
    Button,
    // Other components go here
    Divider,
  },
};

export const theme = extendTheme(overrides);
