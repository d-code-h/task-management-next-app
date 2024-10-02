import Label from './Label';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

export default function FormControl({
  title,
  text,
  property,
  type,
  options,
}: {
  title: string;
  text: string;
  property: string;
  type: string;
  options?: string[];
}) {
  return (
    <div>
      <Label title={title} text={text} />

      {type === 'select' ? (
        <Select property={property} options={options as string[]} />
      ) : type === 'textarea' ? (
        <TextArea property={property} />
      ) : (
        <Input property={property} type={type} />
      )}
    </div>
  );
}
