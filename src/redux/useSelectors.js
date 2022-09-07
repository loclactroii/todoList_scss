import { createSelector } from "@reduxjs/toolkit";

export const useReducer = (state) => state;
export const useTodosSelector = (state) => state.todoList;
export const useSearchSeletor = (state) => state.filters.search;
export const useFilterByStatusSelector = (state) => state.filters.status;
export const useFilterByPrioritySelector = (state) => state.filters.priority;

export const todosRemaining = createSelector(
    [
        useReducer,
        useTodosSelector,
        useSearchSeletor,
        useFilterByStatusSelector,
        useFilterByPrioritySelector,
    ],
    (state, todos, searchValue, status, priority) => {
        let newTodos;

        if (status === "all" && priority === "all") {
            newTodos = todos.filter((todo) => {
                return todo.name.includes(searchValue);
            });

            return newTodos;
        }

        newTodos = todos.filter((todo) => {
            return (
                todo.name.includes(searchValue) &&
                (status === "all"
                    ? true
                    : status === "completed"
                    ? todo.completed
                    : !todo.completed) &&
                (priority === "all" ? true : todo.priority === priority)
            );
        });

        return newTodos;
    }
);
