export interface Skills {
  name: string;
  category: 'frontend' | 'tools' | 'languages';
}

export const skills: Skills[] = [
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Astro', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Git', category: 'tools' },
  { name: 'Node', category: 'tools' },
];
