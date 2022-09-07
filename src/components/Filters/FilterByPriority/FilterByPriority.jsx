import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./FilterByPriority.module.scss";
import { useDispatch } from "react-redux";
import filterSlice from "../filterSlice";

const cx = classNames.bind(styles);

function FilterByPriority() {
    const [priority, setPriority] = useState("all");
    const dispatch = useDispatch();
    const checked = () => {
        if (priority === "all") {
            return true;
        } else {
            return false;
        }
    };
    const handleChangePriority = (e) => {
        setPriority(e.target.value);
        dispatch(filterSlice.actions.filterByPriority(e.target.value));
    };

    return (
        <>
            <div className={cx("wrap")}>
                <div className={cx("item")}>
                    <input
                        checked={checked()}
                        type="radio"
                        name="priotiry"
                        value="all"
                        onChange={handleChangePriority}
                    />
                    <label>All</label>
                </div>
                <div className={cx("item")}>
                    <input
                        type="radio"
                        name="priotiry"
                        value="high"
                        onChange={handleChangePriority}
                    />
                    <label>High</label>
                </div>
                <div className={cx("item")}>
                    <input
                        type="radio"
                        name="priotiry"
                        value="medium"
                        onChange={handleChangePriority}
                    />
                    <label>Medium</label>
                </div>
                <div className={cx("item")}>
                    <input
                        type="radio"
                        name="priotiry"
                        value="low"
                        onChange={handleChangePriority}
                    />
                    <label>Low</label>
                </div>
            </div>
        </>
    );
}

export default FilterByPriority;
