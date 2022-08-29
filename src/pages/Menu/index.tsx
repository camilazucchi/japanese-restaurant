import styles from './Menu.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Originator from './Originator';
import Items from './Items';

export default function Menu() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [originator, setOriginator] = useState("");
    return (
        <main>
            <div className={styles.navbar}>
                <div className={styles.navbar__logo}>
                    <Logo />
                </div>
                <div className={styles.navbar__links}>
                    <a>MENU</a>
                    <a>FIND US</a>
                    <a>CHEF'S FAVORITE</a>
                </div>
                <div className={styles.navbar__button}>
                    <button>ORDER NOW</button>
                </div>
            </div>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    食べ物<br/>
                    Original 
                    Japanese
                    Cousine
                </div>
            </header>

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
                <Items />
            </section>
        </main>
    )
}