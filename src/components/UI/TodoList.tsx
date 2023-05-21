import { Stack, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import { useFetchAllTodosQuery } from "../../redux/store/Store";
import { nanoid } from "@reduxjs/toolkit";
function TodoList() {
  const { data } = useFetchAllTodosQuery();
  // console.log(data);

  return (
    <Stack sx={{ padding: "30px 60px", gap: "15px" }}>
      <Typography sx={{ color: "#fff" }} variant="h5">
        TodoList
      </Typography>
      {data?.map((item: any) => (
        <TodoItem key={nanoid()} {...item} />
      ))}
    </Stack>
  );
}

export default TodoList;
