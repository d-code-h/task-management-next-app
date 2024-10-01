import React, { Dispatch, SetStateAction } from 'react';

export default function Input({
  property,
  setProperty,
  type,
}: {
  property: string;
  setProperty: Dispatch<SetStateAction<string>>;
  type: string;
}) {
  return (
    <input
      type={type}
      id="task-title"
      value={property}
      onChange={(e) => setProperty(e.target.value)}
      className=" p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      placeholder="Enter task title"
    />
  );
}
