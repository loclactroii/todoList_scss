import classNames from "classnames/bind";
import styles from "./SearchTodo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import filterSlice from "../filterSlice";

const cx = classNames.bind(styles);

function SearchTodo() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        dispatch(filterSlice.actions.searchTodo(e.target.value));
    };

    return (
        <>
            <div className={cx("wrapper")}>
                <input
                    value={value}
                    onChange={handleChange}
                    className={cx("input")}
                    placeholder="Search todo..."
                />
                <div className={cx("block")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </>
    );
}

export default SearchTodo;
