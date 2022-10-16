import { Box } from "@chakra-ui/react";
import React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

interface AnalyticChartProps {
  data: {
    date: string;
    impressions: string;
    clicks: string;
    campaign_id: string;
  }[];
}

export function AnalyticChart({ data }: AnalyticChartProps) {
    console.log(data)
  return (
    <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'calc(100vw - 350)', marginTop: 32}}>
      <LineChart data={data} width={800} height={500}>
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={'date'} />
        <YAxis />
        <Line type={"monotone"} dataKey="clicks" stroke="green" />
        <Line type={"monotone"} dataKey="impressions" stroke="blue" />
        <Tooltip />
      </LineChart>
    </Box>
  );
}
