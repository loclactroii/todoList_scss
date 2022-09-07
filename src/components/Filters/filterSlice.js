import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "all",
        priority: "all",
    },
    reducers: {
        searchTodo: (state, action) => {
            state.search = action.payload;
        },
        filterByStatus: (state, action) => {
            state.status = action.payload;
        },
        filterByPriority: (state, action) => {
            state.priority = action.payload;
        },
    },
});
