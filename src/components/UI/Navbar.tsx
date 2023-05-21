import React from "react";
import { Typography, Stack } from "@mui/material";
import { SiTodoist } from "react-icons/si";
function Navbar() {
  return (
    <Stack
      direction="row"
      sx={{
        background: "#262626",
        borderBottom: "1px solid #aaa",
        gap: "20px",
        padding: "20px 60px",
        color: "#FFF",
        alignItems: "center",
      }}
    >
      <SiTodoist size={30} />
      <Typography variant="h4" sx={{ fontSize: "29px" }}>
        React Todo App
      </Typography>
    </Stack>
  );
}

export default Navbar;
