import styles from "./Originator.module.scss";
import options from "./options.json";
import { useState } from "react";

export default function Originator() {
    const [open, setOpen] = useState(false);
    return (
        <button className={styles.originator} onClick={() => setOpen(!open)}>
            <span>Filter by</span>
            <div className={styles.originator__options}>
                {options.map((option) => (
                    <div className={styles.originator__option} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    );
}