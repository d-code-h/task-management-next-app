import { Dispatch, SetStateAction } from 'react';

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
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
}

export type { TaskType, TasksContextType };
