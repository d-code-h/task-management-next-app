import React, { Dispatch, SetStateAction } from 'react';
import Label from './Label';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

export default function FormControl({
  title,
  text,
  property,
  setProperty,
  type,
  options,
}: {
  title: string;
  text: string;
  property: string;
  setProperty: Dispatch<SetStateAction<string>>;
  type: string;
  options?: string[];
}) {
  return (
    <div>
      <Label title={title} text={text} />

      {type === 'select' ? (
        <Select
          property={property}
          setPriority={setProperty}
          options={options as string[]}
        />
      ) : type === 'textarea' ? (
        <TextArea property={property} setProperty={setProperty} />
      ) : (
        <Input property={property} setProperty={setProperty} type={type} />
      )}
    </div>
  );
}
