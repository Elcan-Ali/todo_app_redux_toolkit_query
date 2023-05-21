import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {
  BaseQueryFn,
  EndpointDefinitions,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const TodosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: function (
    builder: EndpointBuilder<
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      "todos"
    >
  ): EndpointDefinitions {
    return {
      fetchAllTodos: builder.query({
        query: () => {
          return {
            url: "/todos",
            method: "GET",
          };
        },
      }),
      fetchTodo: builder.query({
        query: (id) => {
          return {
            url: `/todos/${id}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAllTodosQuery, useFetchTodoQuery }: any = TodosApi;
