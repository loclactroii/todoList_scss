import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./FilterByStatus.module.scss";
import { useDispatch } from "react-redux";
import filterSlice from "../filterSlice";

const cx = classNames.bind(styles);

function FilterByStatus() {
    const dispatch = useDispatch();

    const [status, setStatus] = useState("all");
    const defaultCheck = () => {
        if (status === "all") {
            return true;
        } else {
            return false;
        }
    };

    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
        dispatch(filterSlice.actions.filterByStatus(e.target.value));
    };

    return (
        <>
            <div className={cx("wrap")}>
                <div className={cx("item")}>
                    <input
                        checked={defaultCheck()}
                        onChange={handleChangeStatus}
                        type="radio"
                        name="status"
                        value="all"
                    />
                    <label>All</label>
                </div>
                <div className={cx("item")}>
                    <input
                        onChange={handleChangeStatus}
                        type="radio"
                        name="status"
                        value="completed"
                    />
                    <label>Completed</label>
                </div>
                <div className={cx("item")}>
                    <input
                        onChange={handleChangeStatus}
                        type="radio"
                        name="status"
                        value="todo"
                    />
                    <label>To do</label>
                </div>
            </div>
        </>
    );
}

export default FilterByStatus;
