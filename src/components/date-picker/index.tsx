import { Box, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

interface DatePickerProps {
  onChange: (value: string) => void;
  value: string;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const datePickerInputRef = useRef<any>(null);
  const showDatePicker = () => {
    datePickerInputRef.current.showPicker();
  };
  return (
    <Box style={styles.container}>
      <Box onClick={showDatePicker}>
        <Text style={styles.dateText}>{value || "YYYY-MM-DD"}</Text>
      </Box>
      <Box style={styles.crossIconContainer} onClick={() => onChange("")}>
        <Text style={styles.crossIcon}>X</Text>
      </Box>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        style={styles.input}
        ref={datePickerInputRef}
        type={"date"}
      />
    </Box>
  );
}

const styles = {
  container: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    borderStyle: "solid",
    display: "flex",
    width: 120,
    paddingLeft: 8,
    paddingRight: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: {
    fontSize: 12,
    marginRight: 8,
    width: 90
  },
  input: {
    width: 0,
    border: "none",
    height: 0,
  },
  crossIconContainer: {
    borderRadius: "50%",
    backgroundColor: "lightgray",
    padding: 4,
    width: 12,
    height: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  crossIcon: {
    fontSize: 10,
  },
};
