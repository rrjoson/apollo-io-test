import React from "react";
import { Box } from "reflexbox";
import Audio from "./Audio";

/**
 * This is a React function component.
 *
 * @param {Object} props
 * @param {string} props.speed
 */
const Header = ({ speed = "1.0x", playing, setPlaying }) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#eff3f6",
        height: "59px",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        px: "25px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Audio playing={playing} setPlaying={setPlaying} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "20px",
            borderRadius: "40px",
            border: "solid 1px #d0d9e2",
            backgroundImage: "linear-gradient(to bottom, #ffffff, #f8fafc)",
            color: "#556c86",
            fontSize: "12px",
            fontWeight: "bold",
            marginLeft: "20px"
          }}
        >
          {speed}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "92px",
          height: "34px",
          borderRadius: "4px",
          border: "solid 1px #d0d9e2",
          backgroundImage: "linear-gradient(to bottom, #ffffff, #f8fafc)",
          color: "#556c86"
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="12"
          viewBox="0 0 15 12"
        >
          <path
            fill="#556C86"
            fill-rule="evenodd"
            d="M14.434 5.6L8.828 0v3.2C3.222 4 .819 8 .018 12c2.002-2.8 4.805-4.08 8.81-4.08v3.28l5.606-5.6z"
          />
        </svg>
        <Box
          sx={{
            pl: "5px",
            fontSize: "14px",
            fontWeight: "bold"
          }}
        >
          Share
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
