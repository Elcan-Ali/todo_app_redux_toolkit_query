import { Stack, Typography } from "@mui/material";
import { useFetchTodoQuery } from "../redux/apis/TodosApi";
import { BsPatchCheck, BsPatchExclamation } from "react-icons/bs";
import { useParams } from "react-router-dom";

function TodoPage() {
  const { id } = useParams();
  const { data } = useFetchTodoQuery(id);

  let compeletedIcon = data?.completed ? (
    <BsPatchCheck fill="green" />
  ) : (
    <BsPatchExclamation fill="red" />
  );
  return (
    <Stack
      sx={{
        background: "#262626",
        width: "400px",
        color: "#fff",
        borderRadius: "4px",
        padding: "20px 60px",
      }}
    >
      <Typography variant="body1">Id: {data?.id}</Typography>
      <Typography
        sx={{ display: "flex", alignItems: "center", gap: "6px" }}
        variant="body1"
      >
        isCompeleted: {compeletedIcon}
      </Typography>
      <Typography variant="body1">Todo: {data?.title}</Typography>
    </Stack>
  );
}

export default TodoPage;
