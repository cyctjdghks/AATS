import React, { useCallback, useState } from "react";
// third-party
import { PieChart, Pie, Sector, Cell } from "recharts";
// custom hook
import { CommuteData } from "./Data";
// css style
import classes from "./CommutePie.module.css";

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    payload,
    percent,
    color,
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="#000000"
        style={{ whiteSpace: "nowrap" }}
        className={classes.texts}
      >
        {`${payload.name}   (${(percent * 100).toFixed(2)}%)`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={color}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={color}
      />
    </g>
  );
};

const CommutePie = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const tmpData = CommuteData();
  const faulty = tmpData.late + tmpData.earlyLeave - tmpData.faulty;

  const data = [
    { name: "정상출근", value: tmpData.normalAttendance, color: "#0088FE" },
    { name: "지각/ 조퇴", value: faulty, color: "#00C49F" },
    { name: "결근", value: tmpData.absen, color: "#FFBB28" },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={250} height={250}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={125}
        cy={125}
        innerRadius={80}
        outerRadius={100}
        dataKey="value"
        color="color"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default CommutePie;
