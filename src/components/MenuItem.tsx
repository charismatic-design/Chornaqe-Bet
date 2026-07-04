import React from 'react';
import { PastiItem } from '../types';

interface MenuItemProps {
  item: PastiItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{item.price} ETB</p>
    </div>
  );
};

export default MenuItem;
