import React from 'react';
import styles from './Search.module.scss';
import { CgSearch } from 'react-icons/cg'; 

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
        placeholder="Search your favorite dish"
      />
      <CgSearch 
        size={20}
        color="$grey"
      />
    </div>
  );
}