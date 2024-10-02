import { Dispatch, SetStateAction } from 'react';

interface FormType {
  [key: string]: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: '';
}
interface TaskType {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: Date;
  createdAt: string;
  updatedAt: string;
  assignedTo: string;
  comments: string[];
  attachments: string[];
}

interface TasksContextType {
  tasks: TaskType[];
  formData: FormType;
  setFormData: Dispatch<SetStateAction<FormType>>;
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

export type { FormType, TaskType, TasksContextType };
