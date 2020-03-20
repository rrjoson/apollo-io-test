import React, { useContext } from "react";

import { Box } from "reflexbox";
import { AppContext } from "../App";
import { Icon } from "react-icons-kit";
import { ic_play_arrow, ic_pause } from "react-icons-kit/md/";

function Audio() {
  const context = useContext(AppContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="19"
        viewBox="0 0 16 19"
      >
        <path
          fill="#556C86"
          fill-rule="evenodd"
          d="M3.1 7.5L1.7 6.1C.8 7.3.2 8.6.1 10h2c.1-.9.5-1.7 1-2.5zm-1 4.5h-2c.2 1.4.7 2.7 1.6 3.9l1.4-1.4c-.5-.8-.9-1.6-1-2.5zm1 5.3c1.2.9 2.5 1.4 3.9 1.6v-2c-.9-.1-1.7-.5-2.5-1l-1.4 1.4zM9 3.1V0L4.5 4.5 9 9V5.1c2.8.5 5 2.9 5 5.9 0 3-2.2 5.4-5 5.9v2c3.9-.5 7-3.9 7-7.9s-3.1-7.4-7-7.9z"
        />
      </svg>
      {context.playing ? (
        <Box
          onClick={() => context.setPlaying(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "14px",
            width: "34px",
            height: "34px",
            border: "solid 1px #0 28be6",
            borderRadius: "50%",
            backgroundImage: "linear-gradient(to bottom, #229ffb, #028fee)",
            color: "white"
          }}
        >
          <Icon icon={ic_pause} size={24} />
        </Box>
      ) : (
        <Box
          onClick={() => context.setPlaying(true)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "14px",
            width: "34px",
            height: "34px",
            border: "solid 1px #028be6",
            borderRadius: "50%",
            backgroundImage: "linear-gradient(to bottom, #229ffb, #028fee)",
            color: "white"
          }}
        >
          <Icon icon={ic_play_arrow} size={24} />
        </Box>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="19"
        viewBox="0 0 16 19"
      >
        <path
          fill="#556C86"
          fill-rule="evenodd"
          d="M11.5 4.5L7 0v3.1c-3.9.5-7 3.8-7 7.9 0 4.1 3.1 7.4 7 7.9v-2C4.2 16.4 2 14 2 11c0-3 2.2-5.4 5-5.9V9l4.5-4.5zm4.4 5.5c-.2-1.4-.7-2.7-1.6-3.9l-1.4 1.4c.5.8.9 1.6 1 2.5h2zM9 16.9v2c1.4-.2 2.7-.7 3.9-1.6l-1.4-1.4c-.8.5-1.6.9-2.5 1zm3.9-2.4l1.4 1.4c.9-1.2 1.5-2.5 1.6-3.9h-2c-.1.9-.5 1.7-1 2.5z"
        />
      </svg>
    </Box>
  );
}

export default Audio;
