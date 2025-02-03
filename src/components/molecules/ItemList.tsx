import React from 'react';
import Item from '../../atoms/Item';
import { Item as ItemType } from '../../types';

const ItemList = ({ items }: { items: ItemType[] }) => {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;