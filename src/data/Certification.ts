export interface Certification {
  institute_name: string;
  tittle: string;
  start_date: Date;
  end_date: Date;
}

export const skillsCertification: Certification[] = [
  {
    institute_name: 'Coursera - Colnodo',
    tittle: 'Aspectos básicos del diseño de la experiencia del usuario',
    start_date: new Date('2023'),
    end_date: new Date('2023'),
  },
  {
    institute_name: 'Coursera - Colnodo',
    tittle:
      'Primeros pasos en el proceso de diseño de UX: Empatizar, definir e idear',
    start_date: new Date('2023'),
    end_date: new Date('2023'),
  },
  {
    institute_name: 'Coursera - SENATIC',
    tittle: 'Fundamentos de programación en kotlin',
    start_date: new Date('2024'),
    end_date: new Date('2024'),
  },
];
