import { Dispatch, SetStateAction } from 'react';

export default function Select({
  property,
  setPriority,
  options,
}: {
  property: string;
  setPriority: Dispatch<SetStateAction<string>>;
  options: string[];
}) {
  return (
    <select
      id="status"
      value={property}
      onChange={(e) => setPriority(e.target.value)}
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
