"use client";
import HeatMap from "@uiw/react-heat-map";

const value = [
  { date: "2016/01/11", count: 2 },
  { date: "2016/01/12", count: 20 },
  { date: "2016/01/13", count: 10 },
  ...[...Array(17)].map((_, idx) => ({
    date: `2016/02/${idx + 10}`,
    count: idx,
  })),
  { date: "2016/04/11", count: 2 },
  { date: "2016/05/01", count: 5 },
  { date: "2016/05/02", count: 5 },
  { date: "2016/05/04", count: 11 },
];

const Heatmap = () => {
  return (
    <div className="flex-1 w-full h-full border border-neutral-400 rounded-md p-4 flex items-center justify-center bg-white">
      <HeatMap
        value={value}
        startDate={new Date("2016/01/01")}
        weekLabels={["", "Mon", "", "Wed", "", "Fri", "",]}
        rectSize={18}
        space={4}
        width="100%"
        height="100%"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Heatmap;
