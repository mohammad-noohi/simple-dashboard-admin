import "./chart.css";
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianAxis, Tooltip, CartesianGrid, Legend } from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      <ResponsiveContainer width="100%" aspect="4">
        <LineChart data={data}>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Tooltip />
          {grid && <CartesianGrid stroke="#5550bd" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
