import React from 'react';
import { Item as ItemType } from '../types';

const Item = ({ item }: { item: ItemType }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Item;