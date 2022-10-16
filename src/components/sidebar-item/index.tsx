import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface SidebarItemProps {
  title: string;
}

export function SidebarItem({ title }: SidebarItemProps) {
  return (
    <Box style={styles.itemContainer}>
      <Text style={styles.title}>{title}</Text>
    </Box>
  );
}

const styles = {
    itemContainer: {
        padding: 8,
        paddingLeft: 18,
    },
    title: {
        fontWeight: '600'
    }
}