import React from 'react';
import filters from './filters.json';
import styles from './Filters.module.scss';

type optionInterface = typeof filters[0];

interface Props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: Props) {

    function selectFilter(option: optionInterface) {
        return setFilter(option.id);
    }
    return (
    <div className={styles.filters}>
            {filters.map((option) => (
                <button className={`${styles.filters__filter} ${filter === option.id ? styles ['filters__filter--active'] : ""}`} key={option.id} onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>);
}
