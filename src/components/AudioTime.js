import React, { useContext } from "react";
import { Box } from "rebass";
import moment from "moment";
import { AppContext } from "../App";
import momentDurationFormatSetup from "moment-duration-format";

const AudioTime = ({ curTime, duration }) => {
  const context = useContext(AppContext);

  const formatDuration = duration => {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  };

  return (
    <Box display="flex" width="100%" px="25px" my="20px">
      <Box
        sx={{
          display: "flex",
          color: "#7e8fa5",
          height: "20px",
          backgroundColor: "#eff3f6",
          borderRadius: "3px"
        }}
      >
        <Box sx={{ p: "3px", fontSize: "12px" }}>
          <Box as="span">{formatDuration(context.curTime)}</Box>
          <Box
            as="span"
            sx={{
              color: "#354053"
            }}
          >
            {" "}
            / {formatDuration(context.duration)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AudioTime;
