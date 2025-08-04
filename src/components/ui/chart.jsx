import * as React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";
import { cn } from "@/lib/utils";

// Create a context for theme and colors
const ChartContext = React.createContext({
  colors: {},
  theme: "light",
});

// Main Chart wrapper component
export const Chart = ({ 
  children, 
  className, 
  colors = {},
  theme = "light",
  ...props 
}) => {
  return (
    <ChartContext.Provider value={{ colors, theme }}>
      <div className={cn("w-full h-[300px]", className)} {...props}>
        {children}
      </div>
    </ChartContext.Provider>
  );
};

// Custom tooltip component
export const ChartTooltip = ({ 
  active, 
  payload, 
  label, 
  formatter = (value) => value,
  ...props 
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-md p-4 shadow-md">
        <p className="font-medium">{label}</p>
        {payload.map((entry, index) => (
          <div key={`tooltip-item-${index}`} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm">
              {entry.name}: {formatter(entry.value, entry.name, entry, index)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Area Chart component
export const AreaChart = ({ 
  data = [],
  xKey = '',
  series = [],
  className,
  ...props 
}) => {
  const { colors } = React.useContext(ChartContext);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        {...props}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <ChartTooltip />
        <Legend />
        {series.map((serie) => (
          <Area
            key={serie.dataKey}
            type="monotone"
            dataKey={serie.dataKey}
            name={serie.name}
            stroke={colors[serie.color] || serie.color || "#8884d8"}
            fill={colors[`${serie.color}Light`] || "#8884d822"}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

// Line Chart component
export const LineChart = ({ 
  data = [],
  xKey = '',
  series = [],
  className,
  ...props 
}) => {
  const { colors } = React.useContext(ChartContext);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        {...props}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <ChartTooltip />
        <Legend />
        {series.map((serie) => (
          <Line
            key={serie.dataKey}
            type="monotone"
            dataKey={serie.dataKey}
            name={serie.name}
            stroke={colors[serie.color] || serie.color || "#8884d8"}
            strokeWidth={2}
            dot={{
              r: 4,
              stroke: colors[serie.color] || serie.color || "#8884d8",
              strokeWidth: 2,
              fill: "#fff",
            }}
            activeDot={{
              r: 6,
              stroke: colors[serie.color] || serie.color || "#8884d8",
              strokeWidth: 2,
              fill: "#fff",
            }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

// Bar Chart component
export const BarChart = ({ 
  data = [],
  xKey = '',
  series = [],
  className,
  ...props 
}) => {
  const { colors } = React.useContext(ChartContext);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        {...props}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <ChartTooltip />
        <Legend />
        {series.map((serie) => (
          <Bar
            key={serie.dataKey}
            dataKey={serie.dataKey}
            name={serie.name}
            fill={colors[serie.color] || serie.color || "#8884d8"}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

// Pie Chart component
export const PieChart = ({ 
  data = [],
  dataKey = 'value',
  nameKey = 'name',
  colors = [],
  className,
  ...props 
}) => {
  const { colors: themeColors = {} } = React.useContext(ChartContext);
  const chartColors = colors.length 
    ? colors 
    : ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F"];
  
  if (!data || !data.length) return null;
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart {...props}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={{
            fill: "#ffffff",
            fontSize: 12,
            fontWeight: "bold",
          }}
          outerRadius={80}
          fill="#8884d8"
          dataKey={dataKey}
          nameKey={nameKey}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={themeColors[chartColors[index % chartColors.length]] || chartColors[index % chartColors.length]} 
            />
          ))}
        </Pie>
        <ChartTooltip />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export {
  Chart,
  ChartTooltip,
  AreaChart,
  LineChart,
  BarChart,
  PieChart
};
