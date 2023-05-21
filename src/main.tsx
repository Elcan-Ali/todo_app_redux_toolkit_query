import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routing";
import { Provider } from "react-redux";
import { store } from "./redux/store/Store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
