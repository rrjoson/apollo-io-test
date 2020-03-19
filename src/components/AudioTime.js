import React from "react";
import { Box } from "rebass";

const AudioTime = () => {
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
          <Box as="span">04:23</Box>
          <Box
            as="span"
            sx={{
              color: "#354053"
            }}
          >
            / 18:03
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AudioTime;
