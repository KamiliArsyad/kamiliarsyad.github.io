const colors = {
  darkest: "#0a1128",
  lightest: "#ffeddf",
};

const DEFAULT_HEADING_WEIGHT = "700";

export const styles = {
  global: {
    body: {
      bg: colors.lightest,
      color: colors.darkest,
    },
    h1: {
      fontSize: "2.75rem",
      fontWeight: DEFAULT_HEADING_WEIGHT,
      color: colors.darkest,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: DEFAULT_HEADING_WEIGHT,
      color: colors.darkest,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: DEFAULT_HEADING_WEIGHT,
      color: "black",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: "700",
      color: "black",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "black",
    },
  },
};
