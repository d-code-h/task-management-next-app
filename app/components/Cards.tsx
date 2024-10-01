const tasks = [
  {
    id: '12345abcde',
    title: 'Implement User Authentication',
    description:
      'Create the backend logic for user signup and login using JWT.',
    status: 'To Do',
    priority: 'High',
    dueDate: '2024-10-10T00:00:00Z',
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
    dueDate: '2024-10-10T00:00:00Z',
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
    priority: 'High',
    dueDate: '2024-10-10T00:00:00Z',
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
    status: 'To Do',
    priority: 'High',
    dueDate: '2024-10-10T00:00:00Z',
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
    priority: 'High',
    dueDate: '2024-10-10T00:00:00Z',
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
    status: 'To Do',
    priority: 'High',
    dueDate: '2024-10-10T00:00:00Z',
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
    status: 'To Do',
    priority: 'High',
    dueDate: '2024-10-10T00:00:00Z',
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
    dueDate: '2024-10-10T00:00:00Z',
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
    status: 'To Do',
    priority: 'High',
    dueDate: '2024-10-10T00:00:00Z',
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
    dueDate: '2024-10-10T00:00:00Z',
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

const status = ['To Do', 'In Progress', 'Done'];
export default function Cards() {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:justify-between max-w-screen-lg mx-auto">
      {status.map((state) => (
        <section key={state} className="border border-gray-10 rounded-md p-3">
          <h2 className="text-center text-xl font-bold my-3">{state}</h2>
          <div className="flex flex-col gap-2">
            {tasks
              .filter(({ status }) => status === state)
              .map((task) => (
                <div
                  key={task.id}
                  className="border px-3 py-2 rounded-md bg-gray-50 hover:outline hover:outline-1 hover:border-none"
                >
                  <h2>{task.title}</h2>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
