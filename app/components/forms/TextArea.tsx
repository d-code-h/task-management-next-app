import React, { Dispatch, SetStateAction } from 'react';

export default function TextArea({
  property,
  setProperty,
}: {
  property: string;
  setProperty: Dispatch<SetStateAction<string>>;
}) {
  return (
    <textarea
      id="task-description"
      rows={4}
      value={property}
      onChange={(e) => setProperty(e.target.value)}
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      placeholder="Enter task description"
    />
  );
}
