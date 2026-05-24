"use client";

import { getTimeline } from "@/utils/timeline";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#008459", "#4900E8", "#A100DB"];

export default function MyPieChart() {
  const entries = getTimeline();

  const count =(type) => {
    if (type === "Call") {
      return entries.filter((entry) => entry.type === "Call").length;
    }
    if (type === "Text"){
      return entries.filter(entry => entry.type === "Text").length
    }
    if (type === "Video Call"){
      return entries.filter(entry => entry.type === "Video Call").length
    } 
  }
  const data = [
    {
      name: "Calls", value: count("Call")
    },
    { name: "Texts", value: count("Text")
    },
    {
      name: "Video Calls", value: count("Video Call")
    }
  ]
  
  return (
    <div className="w-7xl mx-auto mt-20">
      <h2 className="text-5xl font-bold mb-4">Friendship Analysis</h2>
      <div className="bg-base-200 shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold text-slate-600">By Intersection Type</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              iconType="circle"
              wrapperStyle={{
                paddingTop: "20px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}