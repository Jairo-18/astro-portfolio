import projectZen from '..//assets/images/projects/projectzen.png';

export interface Project {
  title: string;
  description: string;
  image: string | ImageMetadata;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'ProjectZen',
    description: 'Gestor de tareas',
    image: projectZen,
    tags: ['AngularJS', 'Bootstrap', 'NestJS', 'TypeORM'],
    github: 'https://github.com/username/ecommerce',
    demo: 'https://project-zen.netlify.app',
  },
  // {
  //   title: 'Task Manager',
  //   description:
  //     'Aplicación de gestión de tareas con autenticación y tiempo real',
  //   image: projectZen,
  //   tags: ['React', 'Firebase', 'Material-UI'],
  //   github: 'https://github.com/username/taskmanager',
  //   demo: 'https://taskmanager-demo.com',
  // },
  // {
  //   title: 'Portfolio Website',
  //   description: 'Sitio web personal construido con Astro y Tailwind CSS',
  //   image: projectZen,
  //   tags: ['Astro', 'Tailwind CSS', 'TypeScript'],
  //   github: 'https://github.com/username/portfolio',
  // },
];
