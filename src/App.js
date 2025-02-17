import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddItem } from './hooks/useAddItem';
import ItemList from './components/molecules/ItemList';

const App = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const mutation = useAddItem();
  const [items, setItems] = useState([]);

  const onSubmit = (data) => {
    mutation.mutate(data, {
      onSuccess: (newItem) => {
        setItems([newItem]);
        reset();
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Agregar un Tema</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <input
          {...register('title', { required: 'Titulo es requerido', minLength: { value: 3, message: 'El titulo debe tener al menos 3 caracteres' } })}
          placeholder="Titulo"
          className="block w-full p-2 mb-2 border rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <textarea
          {...register('body', { required: 'El mensaje es requerido', minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres' } })} 
          placeholder="Mensaje"
          className="block w-full p-2 mb-2 border rounded"
        />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Añadir Nuevo Tema</button>
      </form>
      <h2 className="text-xl font-bold mb-2">Lista de Temas</h2>
      <ItemList items={items} />
    </div>
  );
};

export default App;