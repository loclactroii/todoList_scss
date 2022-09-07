export const addTodo = (todo) => {
    return {
        type: "TodoList/addTodo",
        payload: todo,
    };
};

export const searchTodo = (searchValue) => {
    return {
        type: "TodoList/searchTodo",
        payload: searchValue,
    };
};

export const filterByStatus = (status) => {
    return {
        type: "TodoList/filterByStatus",
        payload: status,
    };
};

export const toggleStatus = (id) => {
    return {
        type: "TodoList/toggleStatus",
        payload: id,
    };
};

export const filterByPriority = (priority) => {
    return {
        type: "TodoList/filterByPriority",
        payload: priority,
    };
};
