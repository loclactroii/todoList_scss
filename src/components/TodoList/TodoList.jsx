import classNames from "classnames/bind";
import Todo from "./Todo/Todo";
import styles from "./TodoList.module.scss";
import { useSelector } from "react-redux";
import { todosRemaining } from "../../redux/useSelectors";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import todoListSlice from "./todoListSlice";

const cx = classNames.bind(styles);

function TodoList() {
    const todos = useSelector(todosRemaining);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [priority, setPriority] = useState("medium");

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleChangePriority = (e) => {
        setPriority(e.target.value);
    };

    const handleClickSubmit = (e) => {
        console.log(1);
        dispatch(
            todoListSlice.actions.addTodo({
                id: uuidv4(),
                name: value,
                priority: priority,
                completed: false,
            })
        );

        setValue("");
        setPriority("medium");
    };

    return (
        <div className={cx("wrap")}>
            <div className={cx("todos")}>
                {todos.map((todo) => (
                    <Todo
                        id={todo.id}
                        key={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </div>
            <div className={cx("wrapper")}>
                <input
                    value={value}
                    placeholder="Add todo..."
                    onChange={handleInputChange}
                />
                <select onChange={handleChangePriority} value={priority}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button onClick={handleClickSubmit}>Add</button>
            </div>
        </div>
    );
}

export default TodoList;
