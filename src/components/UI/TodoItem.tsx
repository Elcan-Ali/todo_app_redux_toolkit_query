import React from "react";
import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function TodoItem({ title, id }: { title: string; id: number }) {
  return (
    <NavLink className="todo-item" to={`/${id}`}>
      <Stack
        sx={{ border: "1px solid #aaa", borderRadius: "4px", padding: "20px" }}
      >
        <Typography variant="body2">
          {id}.{title}
        </Typography>
      </Stack>
    </NavLink>
  );
}

export default TodoItem;
