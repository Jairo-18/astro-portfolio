export interface Skills {
  name: string;
  category: 'frontend' | 'tools' | 'languages';
}

export const skills: Skills[] = [
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'AngularJS', category: 'frontend' },
  { name: 'Astro', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Git', category: 'tools' },
];
