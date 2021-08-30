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
  /*  if (datas) {
    console.log("jfks");
    var datas = datas.map((data) => {
      console.log(typeof data.creationDate);
      return {
        ...data,
        creationDate: format(parseISO(data.creationDate), "HH:mm "),
      };

      // data.creationDate = format(data.creationDate, "EEEE do HH:mm a");
    });
    console.log(datas);
  } */
  return (
    <div className="max-w-md p-5">
      {datas && (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={datas}>
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
              tickFormatter={(string) => {
                const date = parseISO(string);
                return format(date, "hh:mm  a ");
              }}
            />

            <YAxis
              dataKey="ttfb"
              axisLine={false}
              tickLine={false}
              tickCount={10}
              tickFormatter={(string) => {
                return string + " ms";
              }}
            />

            <Tooltip content={<CustomTooltip />} />

            <CartesianGrid opacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  console.log("AHMET");
  console.log(active);
  console.log(payload);
  if (active) {
    console.dir(parseISO(label));
    return (
      <div className="flex flex-col  items-center space-y-2 bg-blue-400 p-3 rounded text-white ">
        {/* <h4>{(format(parseISO(label)), "eeee,MMM, yyyy")}</h4> */}
        <h3>
          {payload[0].name}: {payload[0].value} ms
        </h3>
        <h4>{format(parseISO(label), "MMM d yyyy | hh:mm a ")}</h4>
      </div>
    );
  }

  return null;
};

export default Graph;
