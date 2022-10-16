import { Box } from "@chakra-ui/react";
import React from "react";
import { Dashboard } from "../../container/dashboard";
import { Sidebar } from "../../container/sidebar";

export function Home() {
  return (
    <Box style={styles.container}>
      <Sidebar />
      <Dashboard />
    </Box>
  );
}

const styles = {
    container: {
        display: 'flex',
    }
}
