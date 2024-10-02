import { Context } from '@/app/context/TasksContext';
import { TasksContextType } from '@/app/lib/types';
import { useContext } from 'react';

export default function Select({
  property,
  options,
}: {
  property: string;
  options: string[];
}) {
  const { formData, setFormData } = useContext(Context) as TasksContextType;

  return (
    <select
      id="status"
      value={formData[property]}
      onChange={(e) =>
        setFormData((prev) => {
          return {
            ...prev,

            [property]: e.target.value,
          };
        })
      }
      className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
    >
      {options.map((value: string) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
