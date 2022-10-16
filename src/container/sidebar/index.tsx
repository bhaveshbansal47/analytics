import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { SidebarItem } from "../../components/sidebar-item";

export function Sidebar() {
  const sidebarItems = [
    { title: "Analytical" },
    { title: "Ecommerce" },
    { title: "Notes" },
    { title: "Calendar" },
    { title: "Extras" },
  ];
  return (
    <Box style={styles.container}>
      <Text style={styles.heading} >Dashboard</Text>
      <Box style={styles.sidebarItemsContainer}>
        {sidebarItems.map((item) => {
          return <SidebarItem key={item.title} title={item.title} />;
        })}
      </Box>
    </Box>
  );
}

const styles = {
    heading: {
        color: '#7F23CA',
        fontSize: 24,
         marginLeft: 18,
         fontWeight: '700'
    },
    sidebarItemsContainer: {
        marginTop: 48
    },
    container: {
      width: 250,
      backgroundColor: '#F2F5F6',
      height: '100vh'
    }
}
