'use client';

import { createContext, ReactNode, useState } from 'react';
import { TasksContextType, TaskType } from '../lib/types';

export const Context = createContext<null | TasksContextType>(null);

const tasksData = [
  {
    id: '12345abcde',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'Todo',
    priority: 'Low',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
  {
    id: '12345abcdf',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'In Progress',
    priority: 'High',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
  {
    id: '12345abcdg',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
  {
    id: '12345abcdh',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'Todo',
    priority: 'High',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
  {
    id: '12345abcdi',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'Done',
    priority: 'Medium',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
  {
    id: '12345abcdj',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'Todo',
    priority: 'Low',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
  {
    id: '12345abcdk',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'Todo',
    priority: 'Medium',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
  {
    id: '12345abcdl',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'Done',
    priority: 'High',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
  {
    id: '12345abcdm',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'Todo',
    priority: 'High',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
  {
    id: '12345abcdn',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'Done',
    priority: 'High',
    dueDate: new Date(),
    createdAt: '2024-09-28T12:00:00Z',
    updatedAt: '2024-09-28T12:00:00Z',
    assignedTo: 'user123',
    comments: [
      'Remember to add validation for empty fields.',
      'Check if the tokens expire after 24 hours.',
    ],
    attachments: ['design_mockup_v1.png', 'api_documentation.pdf'],
  },
];

const TasksContext = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>(tasksData);

  return (
    <Context.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TasksContext;
