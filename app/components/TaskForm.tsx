import { FormEvent, useContext, useState } from 'react';
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
  const [title, setTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('todo');
  const [priority, setPriority] = useState('low');
  const { tasks, setTasks } = useContext(Context) as TasksContextType;

  const fields = [
    {
      title: 'task-title',
      text: 'Task Title',
      property: title,
      setProperty: setTitle,
      type: 'text',
    },
    {
      title: 'task-description',
      text: 'Task Description',
      property: taskDescription,
      setProperty: setTaskDescription,
      type: 'textarea',
    },
    {
      title: 'due-date',
      text: 'Due-Date',
      property: dueDate,
      setProperty: setDueDate,
      type: 'date',
    },
    {
      title: 'status',
      text: 'Status',
      property: status,
      setProperty: setStatus,
      type: 'select',
      options: [
        {
          value: 'todo',
          text: 'To Do',
        },
        {
          value: 'in-progress',
          text: 'In Progress',
        },
        {
          value: 'done',
          text: 'Done',
        },
      ],
    },
    {
      title: 'piority',
      text: 'Priority',
      property: priority,
      setProperty: setPriority,
      type: 'select',
      options: [
        {
          value: 'low',
          text: 'Low',
        },
        {
          value: 'medium',
          text: 'Medium',
        },
        {
          value: 'high',
          text: 'High',
        },
      ],
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      title,
      taskDescription,
      dueDate,
      status,
      priority,

      createdAt: new Date(),
      updatedAt: new Date(),
      assignedTo: '',
      comments: [],
      attachments: [],
    };

    console.log(tasks);

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
            {fields.map(
              ({ title, text, property, setProperty, type, options }) => (
                <FormControl
                  key={title}
                  title={title}
                  text={text}
                  property={property}
                  setProperty={setProperty}
                  type={type}
                  options={options}
                />
              )
            )}

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
