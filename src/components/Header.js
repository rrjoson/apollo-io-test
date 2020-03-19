import React from "react";
import { Box } from "reflexbox";

const Header = () => {
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
        <Box
          sx={{
            mx: "14px",
            width: "34px",
            height: "34px",
            border: "solid 1px #028be6",
            borderRadius: "50%",
            backgroundImage: "linear-gradient(to bottom, #229ffb, #028fee)"
          }}
        >
          <Box />
        </Box>
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
          1.0x
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
