import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function MyLineChart({data}) {
  return (
    <LineChart
      width={384}
      height={384}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="status" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Completed"
        stroke="#00FF00"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="In_Progress" stroke="#0000CD" />
    </LineChart>
  );
}
