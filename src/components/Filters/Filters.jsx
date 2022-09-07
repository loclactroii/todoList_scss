import classNames from "classnames/bind";
import FilterByPriority from "./FilterByPriority/FilterByPriority";
import FilterByStatus from "./FilterByStatus/FilterByStatus";
import styles from './Filters.module.scss'
import SearchTodo from "./SearchTodo/SearchTodo";

const cx = classNames.bind(styles)

function Filters() {
    return (
    <div className={cx('wrap')}>
        <div className={cx('item')}>
            <p className={cx('title')}>Search</p>
            <SearchTodo />
        </div>
        <div className={cx('item')}>
            <p className={cx('title')}>Filter by status</p>
            <FilterByStatus />
        </div>
        <div className={cx('item')}>
            <p className={cx('title')}>Filter by priority</p>
            <FilterByPriority />
        </div>
    </div>
    );
}

export default Filters;