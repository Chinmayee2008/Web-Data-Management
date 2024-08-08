// AnalyticsDashboardPage.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './AnalyticsDashboardPage.css'; // Make sure you have the corresponding CSS file

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  // ...other data
];

const AnalyticsDashboardPage = () => {
  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default AnalyticsDashboardPage;
