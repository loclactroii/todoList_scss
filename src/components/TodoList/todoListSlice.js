import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "Learn React", priority: "high", completed: true },
        { id: 2, name: "Learn Redux", priority: "high", completed: true },
        { id: 3, name: "Learn MUI", priority: "medium", completed: false },
        { id: 4, name: "Learn NodeJS", priority: "low", completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleStatus: (state, action) => {
            const newTodo = state.find((todo) => todo.id === action.payload);
            if (newTodo) {
                newTodo.completed = !newTodo.completed;
            }
        },
    },
});
