import { Box, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface AnalyticHighlightProps {
  title: string;
  icon: ReactElement;
  value: string | number;
}

export function AnalyticHighlights({
  title,
  icon,
  value,
}: AnalyticHighlightProps) {
  return (
    <Box style={styles.container}>
      <Box style={styles.titleContainer}>
        {icon}
        <Text>{title}</Text>
      </Box>
      <Text style={styles.value}>{value}</Text>
    </Box>
  );
}

const styles = {
  container: {
    boxShadow: "0 0 2px 0.25px",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 4,
    paddingBottom: 4,
    width: 300,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  value: {
    fontWeight: "600",
    fontSize: 24,
  },
};
