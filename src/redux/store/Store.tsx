import { configureStore } from "@reduxjs/toolkit";
import { TodosApi } from "../apis/TodosApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [TodosApi.reducerPath]: TodosApi.reducer,
  },
  middleware: (getDefaultMiddleware): any => {
    return getDefaultMiddleware().concat(TodosApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchAllTodosQuery, useFetchTodoQuery } from "../apis/TodosApi";
