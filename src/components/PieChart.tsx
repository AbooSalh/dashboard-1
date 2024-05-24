import { ResponsivePie } from "@nivo/pie";
export const PieChart = ({ data }) => {
  console.log(data);
  
  return (
    <div className="w-[100px] h-[100px] ">
      <ResponsivePie
        data={data}
        margin={{ top: 10, right: 80, bottom: 10, left: 80 }}
        innerRadius={0.8}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        enableArcLabels={false} 
        enableArcLinkLabels={false}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        tooltip={({ datum }) => (
          <div className="dark:bg-gray-800 p-2 text-xs rounded-xl">
            {datum.id}: {datum.value} in {datum.label}
          </div>
        )}
      />
    </div>
  );
};
