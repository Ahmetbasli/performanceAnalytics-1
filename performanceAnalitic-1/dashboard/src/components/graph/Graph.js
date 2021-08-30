import React from "react";
import { parseISO, format } from "date-fns";
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  ComposedChart,
} from "recharts";
const date = new Date();

console.log(typeof format(date, "do HH:mm a"));

const Graph = ({ datas }) => {
  console.log(datas);
  if (datas) {
    console.log("jfks");
    var formatedDatas = datas.map((data) => {
      console.log(typeof data.creationDate);
      return {
        ...data,
        creationDate: format(parseISO(data.creationDate), "EEEE do HH:mm a"),
      };

      // data.creationDate = format(data.creationDate, "EEEE do HH:mm a");
    });
    console.log(formatedDatas);
  }
  return (
    <div>
      {formatedDatas && (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={formatedDatas}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Line dataKey="ttfb" stroke="#8884d8" dataKey="ttfb" />
            <Area
              dataKey="ttfb"
              stroke="#2451B7"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#color)"
            />

            <XAxis
              dataKey={"creationDate"}
              axisLine={false}
              tickLine={false}
              tickCount={10}
            />

            <YAxis
              dataKey="ttfb"
              axisLine={false}
              tickLine={false}
              tickCount={10}
            />

            <Tooltip />

            <CartesianGrid opacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Graph;
