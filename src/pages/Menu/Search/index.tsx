import React from "react";
import styles from './Search.module.scss';

interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Search({search, setSearch}: Props) {
    return (
        <div className={styles.search}>
            <input
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
        </div>
    )
}