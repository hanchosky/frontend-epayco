import React from 'react';
import { useForm } from 'react-hook-form';
import { useItems } from './hooks/useItems';
import { useAddItem } from './hooks/useAddItem';
import ItemList from './components/molecules/ItemList';

const App = () => {
  const { register, handleSubmit } = useForm();
  const { data: items } = useItems();
  const mutation = useAddItem();

  const onSubmit = (data) => {
    if (!data.title || !data.body) {
      alert('Both fields are required');
      return;
    }
    mutation.mutate(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <input {...register('title')} placeholder="Title" required className="block w-full p-2 mb-2 border rounded" />
        <textarea {...register('body')} placeholder="Body" required className="block w-full p-2 mb-2 border rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Item</button>
      </form>
      <h2 className="text-xl font-bold mb-2">Items List</h2>
      <ItemList items={items || []} />
    </div>
  );
};

export default App;