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
  formInitial: FormType;
  formData: FormType;
  setFormData: Dispatch<SetStateAction<FormType>>;
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formMode: string;
  setFormMode: Dispatch<SetStateAction<string>>;
}

export type { FormType, TaskType, TasksContextType };
