import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const assignmentData = [
    {
      name: "Assignment-1",
      obtained: 50,
      highest: 60,
      average: 55,
    },
    {
      name: "Assignment-2",
      obtained: 53,
      highest: 58,
      average: 54,
    },
    {
      name: "Assignment-3",
      obtained: 50,
      highest: 54,
      average: 50,
    },
    {
      name: "Assignment-4",
      obtained: 60,
      highest: 60,
      average: 55,
    },
    {
      name: "Assignment-5",
      obtained: 30,
      highest: 54,
      average: 52,
    },
    {
      name: "Assignment-6",
      obtained: 49,
      highest: 58,
      average: 50,
    },
    {
      name: "Assignment-7",
      obtained: 50,
      highest: 60,
      average: 55,
    },
    {
      name: "Assignment-8",
      obtained: 60,
      highest: 60,
      average: 58,
    },
  ];

  

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-12 mb-5 text-2xl">
        <p className="font-bold">Assignment Marks Tracker:</p>
        <p>View Your Obtained, Highest and Average Marks for Each Assignment</p>
      </div>
      <AreaChart
      width={1200}
      height={400}
      data={assignmentData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
        <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="obtained"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="highest"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="average"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
    </div>
  );
};

export default Statistics;
