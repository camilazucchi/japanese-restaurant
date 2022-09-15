import { useEffect, useState } from 'react';
import { Menu } from 'types/Dish';
import menu from 'data/menu.json';
import Item from './Item';
import styles from './Items.module.scss';

interface Props {
    search: string,
    filter: number | null,
    originator: string
}

export default function Items(props: Props) {
  const [list, setList] = useState(menu); 
  const { search, filter, originator} = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if(filter !== null) return filter === id;
    return true;
  }
    
  function sort(newList: Menu) {
    switch(originator) {
    case 'portion': 
      return newList.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'serving':
      return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'price':
      return newList.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(sort(newList)); 
  },[search, filter, originator]);

  return (
    <div className={styles.items}>
      {list.map(item => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}