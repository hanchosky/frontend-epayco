import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const addItem = async (newItem: { title: string; body: string }) => {
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