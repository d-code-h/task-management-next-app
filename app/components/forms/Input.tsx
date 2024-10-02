import { Context } from '@/app/context/TasksContext';
import { FormType, TasksContextType } from '@/app/lib/types';
import React, { useContext } from 'react';

export default function Input({
  property,
  type,
}: {
  property: string;
  type: string;
}) {
  const { formData, setFormData } = useContext(Context) as TasksContextType;

  return (
    <input
      type={type}
      id="task-title"
      value={formData[property]}
      onChange={(e) =>
        setFormData((prev: FormType) => {
          console.log(property);
          console.log(prev);
          console.log(e.target.value);
          return { ...prev, [property]: e.target.value };
        })
      }
      className=" p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      placeholder="Enter task title"
    />
  );
}
