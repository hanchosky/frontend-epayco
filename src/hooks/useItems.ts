// filepath: src/hooks/useItems.ts
import { useQuery } from 'react-query';
import axios from 'axios';
import { Item } from '../types';

const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

export const useItems = () => {
  return useQuery('items', fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};