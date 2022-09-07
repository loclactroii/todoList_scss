import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Todo.module.scss";
import { useDispatch } from "react-redux";
import { toggleStatus } from "../../../redux/actions";

const cx = classNames.bind(styles);

const prioritiesBlockColor = {
    high: "rgba(255, 0, 0, 0.1)",
    medium: "rgba(0, 188, 255, 0.2)",
    low: "gray",
};

const prioritiesContentColor = {
    high: "red",
    medium: "#0a8bb9",
    low: "#fff",
};

function Todo({ name, priority, completed, id }) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(completed);
    const handleToggleStatus = () => {
        setChecked(!checked);
        dispatch(toggleStatus(id));
    };

    const customPriority = priority.charAt(0).toUpperCase() + priority.slice(1);

    return (
        <div className={cx("todo")} style={checked ? { opacity: "0.5" } : {}}>
            <div className={cx("todo_left")}>
                <label
                    className={cx("checkbox")}
                    style={checked ? { textDecoration: "line-through" } : {}}
                >
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleToggleStatus}
                    />
                    {name}
                </label>
            </div>
            <div
                className={cx("block")}
                style={{
                    backgroundColor: prioritiesBlockColor[priority],
                    color: prioritiesContentColor[priority],
                    border: `1px solid ${prioritiesContentColor[priority]}`,
                }}
            >
                <span style={checked ? { textDecoration: "line-through" } : {}}>
                    {customPriority}
                </span>
            </div>
        </div>
    );
}

export default Todo;
