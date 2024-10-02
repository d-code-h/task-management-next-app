import { MdEdit, MdDelete } from 'react-icons/md';
import { FormType, TasksContextType, TaskType } from '../lib/types';
import clsx from 'clsx';
import { useContext } from 'react';
import { Context } from '../context/TasksContext';

export default function Card({ task }: { task: TaskType }) {
  const { setFormData, setIsModalOpen, setFormMode } = useContext(
    Context
  ) as TasksContextType;

  const handleEdit = ({
    title,
    description,
    dueDate,
    status,
    priority,
  }: TaskType) => {
    setFormData(() => {
      return {
        title,
        description,
        dueDate: dueDate.toISOString().split('T')[0],
        status,
        priority,
      } as FormType;
    });
    setFormMode(task.id);
    setIsModalOpen(true);
  };
  return (
    <div
      key={task.id}
      className="border px-3 py-2 rounded-md bg-gray-50 hover:outline hover:outline-1 hover:border-none"
    >
      <div>
        <h2 className="flex justify-between py-2">
          <span className="font-bold">{task.title}</span>
          <span
            className={clsx(
              task.priority === 'Low'
                ? 'text-blue-500'
                : task.priority === 'Medium'
                ? 'text-yellow-500'
                : 'text-red-500'
            )}
          >
            {task.priority}
          </span>
        </h2>
        <h4>{task.dueDate.toISOString().split('T')[0]}</h4>
        <p className="my-2">{task.description}</p>

        <div className="flex justify-between">
          <span className="bg-gray-100 px-2 py-1 rounded-md">
            {task.assignedTo}
          </span>

          <div className="flex gap-3">
            <span
              className="bg-gray-100 rounded-full flex justify-center items-center w-6 h-6"
              onClick={() => handleEdit(task)}
            >
              <MdEdit className=" fill-yellow-500" />
            </span>
            <span className="bg-gray-100 rounded-full flex justify-center items-center w-6 h-6">
              <MdDelete className="fill-red-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
