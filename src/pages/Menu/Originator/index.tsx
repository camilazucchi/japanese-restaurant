import styles from "./Originator.module.scss";
import options from "./options.json";
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    originator: string,
    setOriginator: React.Dispatch<React.SetStateAction<string>>;
}

export default function Originator({
    originator,
    setOriginator
}: Props) {
    const [open, setOpen] = useState(false);
    const originatorName = originator && options.find(option => option.value === originator)?.name;
    return (
        <button
        className={classNames({
            [styles.originator]: true,
            [styles["originator--active"]]: originator !== "",
        })}
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        >
            <span>{originatorName || "Filter by"}</span>
            {open ? (
                    < MdKeyboardArrowUp size={20}/>
                    ) : (
                    < MdKeyboardArrowDown size={20}/>
                    )}
            <div className={classNames({
                [styles.originator__options]: true,
                [styles["originator__options--active"]]: open,
            })}>
                {options.map((option) => (
                    <div className={styles.originator__option} key={option.value} onClick={() => setOriginator(option.value)}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    );
}