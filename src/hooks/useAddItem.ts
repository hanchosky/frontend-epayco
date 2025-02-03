import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { Item } from '../types';

const addItem = async (newItem: Omit<Item, 'id'>) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
  return response.data;
};

export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};