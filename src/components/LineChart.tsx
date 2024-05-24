import { ResponsiveLine } from "@nivo/line";
const dData = [
  {
    "id": "japan",
    "color": "hsl(19, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 248
      },
      {
        "x": "helicopter",
        "y": 285
      },
      {
        "x": "boat",
        "y": 173
      },
      {
        "x": "train",
        "y": 133
      },
      {
        "x": "subway",
        "y": 34
      },
      {
        "x": "bus",
        "y": 54
      },
      {
        "x": "car",
        "y": 213
      },
      {
        "x": "moto",
        "y": 42
      },
      {
        "x": "bicycle",
        "y": 26
      },
      {
        "x": "horse",
        "y": 236
      },
      {
        "x": "skateboard",
        "y": 142
      },
      {
        "x": "others",
        "y": 185
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(287, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 96
      },
      {
        "x": "helicopter",
        "y": 181
      },
      {
        "x": "boat",
        "y": 198
      },
      {
        "x": "train",
        "y": 150
      },
      {
        "x": "subway",
        "y": 217
      },
      {
        "x": "bus",
        "y": 204
      },
      {
        "x": "car",
        "y": 182
      },
      {
        "x": "moto",
        "y": 242
      },
      {
        "x": "bicycle",
        "y": 121
      },
      {
        "x": "horse",
        "y": 235
      },
      {
        "x": "skateboard",
        "y": 242
      },
      {
        "x": "others",
        "y": 254
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(274, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 75
      },
      {
        "x": "helicopter",
        "y": 139
      },
      {
        "x": "boat",
        "y": 283
      },
      {
        "x": "train",
        "y": 288
      },
      {
        "x": "subway",
        "y": 127
      },
      {
        "x": "bus",
        "y": 298
      },
      {
        "x": "car",
        "y": 153
      },
      {
        "x": "moto",
        "y": 127
      },
      {
        "x": "bicycle",
        "y": 269
      },
      {
        "x": "horse",
        "y": 267
      },
      {
        "x": "skateboard",
        "y": 112
      },
      {
        "x": "others",
        "y": 266
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(125, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 25
      },
      {
        "x": "helicopter",
        "y": 79
      },
      {
        "x": "boat",
        "y": 183
      },
      {
        "x": "train",
        "y": 227
      },
      {
        "x": "subway",
        "y": 62
      },
      {
        "x": "bus",
        "y": 135
      },
      {
        "x": "car",
        "y": 36
      },
      {
        "x": "moto",
        "y": 109
      },
      {
        "x": "bicycle",
        "y": 126
      },
      {
        "x": "horse",
        "y": 0
      },
      {
        "x": "skateboard",
        "y": 74
      },
      {
        "x": "others",
        "y": 198
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(222, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 42
      },
      {
        "x": "helicopter",
        "y": 7
      },
      {
        "x": "boat",
        "y": 272
      },
      {
        "x": "train",
        "y": 107
      },
      {
        "x": "subway",
        "y": 203
      },
      {
        "x": "bus",
        "y": 90
      },
      {
        "x": "car",
        "y": 109
      },
      {
        "x": "moto",
        "y": 125
      },
      {
        "x": "bicycle",
        "y": 169
      },
      {
        "x": "horse",
        "y": 35
      },
      {
        "x": "skateboard",
        "y": 274
      },
      {
        "x": "others",
        "y": 24
      }
    ]
  }
]
export const LineChart = ({data = dData}) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      tooltip={({ point }) => (
        <div className="dark:bg-gray-800 p-2 text-xs rounded-xl">
          X: {point.id} , Y: {point.y}
        </div>
      )}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(245, 0, 0, 0.5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
