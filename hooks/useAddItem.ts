import { useMutation } from 'react-query';
import axios from 'axios';
 


const addItem = async (newItem) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
    return response.data;
  };
  
  export const useAddItem = () => {
    return useMutation(addItem);
  };