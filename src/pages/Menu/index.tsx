import { useState } from 'react';
import styles from './Menu.module.scss';
import Search from './Search';
import Filters from './Filters';
import Originator from './Originator';
import Items from './Items';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [originator, setOriginator] = useState('');
  return (
    <section className={styles.menu}>
      <h3 className={styles.menu__title}>Menu</h3>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Originator originator={originator} setOriginator={setOriginator}/>
      </div>
      <Items search={search} filter={filter} originator={originator}/>
    </section>
  );
}