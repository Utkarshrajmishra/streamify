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

const Demo = () => {
  return (
    <div className="h-fit flex-col flex justify-center w-full border border-neutral-400 rounded-md p-4 mt-6 bg-white">
      <HeatMap
        value={value}
        startDate={new Date("2016/01/01")}
        weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
        rectSize={14}
        space={3}
        style={{ width: "100%" }}
      />
      <div className="font-sans mt-2 flex justify-between">
        <div className="flex gap-6">
          <p className="py-1 px-3 text-[0.82rem] text-white bg-green-400 rounded-full">Filled : 300</p>
          <p className="py-1 px-3 text-[0.82rem] text-white bg-red-400 rounded-full"> Empty : 250</p>
        </div>
        <p className="py-1 px-3 text-[0.82rem] text-white bg-blue-500 rounded-full">Selected: 234</p>
      </div>
    </div>
  );
};

export default Demo;
