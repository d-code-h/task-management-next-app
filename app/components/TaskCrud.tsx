'use client';
import { useContext } from 'react';
import TaskForm from './TaskForm';
import clsx from 'clsx';
import { Context } from '../context/TasksContext';
import { TasksContextType } from '../lib/types';

export default function TaskCrud() {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useContext(
    Context
  ) as TasksContextType;

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={handleOpenModal}
        className={clsx(
          'bg-blue-500 w-16 h-16 fixed right-5 bottom-5  hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full md:w-auto  md:h-auto md:rounded-md md:static md:flex md:ml-auto',
          isModalOpen ? 'hidden' : 'block'
        )}
      >
        <span className="block md:hidden">Add</span>
        <span className="hidden md:block">Add New Task</span>
      </button>

      {/* Task Modal */}
      <TaskForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
