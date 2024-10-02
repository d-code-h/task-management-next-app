import { Context } from '@/app/context/TasksContext';
import { TasksContextType } from '@/app/lib/types';
import React, { useContext } from 'react';

export default function TextArea({ property }: { property: string }) {
  const { formData, setFormData } = useContext(Context) as TasksContextType;
  return (
    <textarea
      id="task-description"
      rows={4}
      value={formData[property]}
      onChange={(e) =>
        setFormData((prev) => {
          return { ...prev, [property]: e.target.value };
        })
      }
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      placeholder="Enter task description"
    />
  );
}
