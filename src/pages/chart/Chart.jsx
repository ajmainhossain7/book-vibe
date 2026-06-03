import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// 🔥 Curved Shape (Recharts style)
const getPath = (x, y, width, height) => `
  M${x},${y + height}
  C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z
`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  return (
    <path
      d={getPath(x, y, width, height)}
      fill={fill}
      stroke="none"
    />
  );
};

// ✅ Your Data
const data = [
  { name: "The Great Gatsby", pages: 192 },
  { name: "To Kill a Mockingbird", pages: 281 },
  { name: "1984", pages: 328 },
  { name: "The Alchemist", pages: 177 },
  { name: "Pride and Prejudice", pages: 279 },
];

// 🎨 Colors
const colors = ["#3B82F6", "#10B981", "#F59E0B", "#F97316", "#EF4444"];

const Chart = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-2xl max-w-5xl mx-auto mt-30">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 400]} />
          <Tooltip />

          <Bar
            dataKey="pages"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;