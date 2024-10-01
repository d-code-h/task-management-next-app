import React from 'react';

export default function Label({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <label htmlFor={title} className="block text-sm font-medium text-gray-700">
      {text}
    </label>
  );
}
