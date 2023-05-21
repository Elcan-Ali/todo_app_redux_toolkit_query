import { Grid, Stack } from "@mui/material";
import Navbar from "../components/UI/Navbar";
import TodoList from "../components/UI/TodoList";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
function MainLayout() {
  
  return (
    <Stack>
      <Stack component="header">
        <Navbar />
      </Stack>
      <Grid container>
        <Grid
          item
          md={3}
          sx={{
            height: "88.1vh",
            overflowY: "auto",
            background: "#262626",
            color: "#fff",
          }}
        >
          <TodoList />
        </Grid>
        <Grid
          item
          md={9}
          sx={{
            height: "88.1vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#eee",
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default MainLayout;
