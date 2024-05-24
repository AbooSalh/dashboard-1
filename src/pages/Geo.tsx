import { geoChart } from "./util/charts.data";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./util/world-countries";
export const Geo = () => {
  return (
    <div className="relative overflow-x-auto shadow-md  w-[100%] h-[calc(100vh-72px)]">
      <div className="block h-full w-full">
        <ResponsiveChoropleth
          data={geoChart}
          features={geo.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="nivo"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
          tooltip={({ feature }) =>
            feature.data ? (
              <div className="dark:bg-gray-800 p-2 text-xs rounded-xl">
                {feature.label}: {feature.value}
              </div>
            ) : (
              <div className="dark:bg-gray-800 p-2 text-xs rounded-xl">
                No data
              </div>
            )
          }
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
            {
              id: "gradient",
              type: "linearGradient",
              colors: [
                {
                  offset: 0,
                  color: "#000",
                },
                {
                  offset: 100,
                  color: "inherit",
                },
              ],
            },
          ]}
          fill={[
            {
              match: {
                id: "CAN",
              },
              id: "dots",
            },
            {
              match: {
                id: "CHN",
              },
              id: "lines",
            },
            {
              match: {
                id: "ATA",
              },
              id: "gradient",
            },
          ]}
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: "#444444",
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000000",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
