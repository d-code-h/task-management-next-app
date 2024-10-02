import { FormEvent, useContext } from 'react';
import FormControl from './forms/FormControl';
import { Context } from '../context/TasksContext';
import { TasksContextType, TaskType } from '../lib/types';

export default function TaskForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const {
    formData: { title, description, dueDate, status, priority },
    setTasks,
  } = useContext(Context) as TasksContextType;

  const fields = [
    {
      title: 'task-title',
      text: 'Task Title',
      property: 'title',
      type: 'text',
    },
    {
      title: 'task-description',
      text: 'Task Description',
      property: 'description',
      type: 'textarea',
    },
    {
      title: 'due-date',
      text: 'Due-Date',
      property: 'dueDate',
      type: 'date',
    },
    {
      title: 'status',
      text: 'Status',
      property: 'status',
      type: 'select',
      options: ['Todo', 'In Progress', 'Done'],
    },
    {
      title: 'priority',
      text: 'Priority',
      property: 'priority',
      type: 'select',
      options: ['Low', 'Medium', 'High'],
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: String(Math.random() * 100),
      title,
      description,
      dueDate: new Date(dueDate),
      status,
      priority,

      createdAt: new Date(),
      updatedAt: new Date(),
      assignedTo: 'Userx',
      comments: [],
      attachments: [],
    };

    setTasks((prev) => [...prev, newTask] as TaskType[]);

    onClose(); // Close modal after submitting
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
          <button
            className="text-gray-500 hover:text-gray-700 ml-auto block"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add New Task
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {fields.map(({ title, text, property, type, options }) => (
              <FormControl
                key={title}
                title={title}
                text={text}
                type={type}
                property={property}
                options={options as string[]}
              />
            ))}

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}
