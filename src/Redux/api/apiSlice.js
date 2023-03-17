import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => "/todos",
      // this confuse shit it how to sort a array in acending order by id
      transformResponse: (res) => res.sort((a, b) => (a.id > b.id ? -1 : 1)),
      //more clean way to do the same sort
      // transformResponse: (res) =>  res.sort((a, b) => b.id - a.id ),
      providesTags: ["todo"],
    }),
    addNewTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetAllTodoQuery,
  useAddNewTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
