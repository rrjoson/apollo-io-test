import React from "react";
import { Box } from "rebass";

const data = [
  ...Array(10).fill({ speaker: "1", status: "played" }),
  ...Array(10).fill({ speaker: "2", status: "played" }),
  ...Array(10).fill({ speaker: "1", status: "played" }),
  ...Array(10).fill({ speaker: "2", status: "played" }),
  ...Array(40).fill({ speaker: "1", status: "played" }),
  ...Array(40).fill({ speaker: "2", status: "unplayed" }),
  ...Array(40).fill({ speaker: "1", status: "unplayed" }),
  ...Array(40).fill({ speaker: "2", status: "unplayed" }),
  ...Array(40).fill({ speaker: "1", status: "unplayed" }),
  ...Array(40).fill({ speaker: "2", status: "unplayed" }),
  ...Array(40).fill({ speaker: "1", status: "unplayed" })
];

const AudioGraph = () => {
  return (
    <Box
      sx={{
        mx: "25px"
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "55px"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            color: "#8868e9",
            fontSize: "12px",
            fontWeight: "600"
          }}
        >
          54% YOU
        </Box>
        <Box
          sx={{
            position: "absolute",
            color: "#1a99f6",
            fontSize: "12px",
            fontWeight: "600",
            bottom: 0
          }}
        >
          46% MICHAEL B.
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "50%",
            width: "100%",
            height: "1px",
            backgroundColor: "#dfe2e5",
            zIndex: 10
          }}
        ></Box>
        <Box sx={{ display: "flex", ml: "108px" }}>
          {data.map(audio => {
            let backgroundColor = audio.speaker === "1" ? "#8868e9" : "#1a99f6";

            if (audio.status === "played") {
              backgroundColor = "#b7c0ce";
            }

            return (
              <Box
                sx={{
                  position: "relative",
                  width: "2px",
                  height: "55px",
                  backgroundColor: "white",
                  mr: "2px"
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "2px",
                    height: "25px",
                    backgroundColor: backgroundColor,
                    mr: "2px",
                    bottom: audio.speaker === "1" ? "unset" : "0"
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AudioGraph;
