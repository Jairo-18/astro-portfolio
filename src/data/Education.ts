export interface Education {
  institute_name: string;
  tittle: string;
  start_date: Date;
  end_date: Date;
}

export const skillsEducation: Education[] = [
  {
    institute_name: 'Colegio Nacional PIO XII',
    tittle: 'Bachiller Académico',
    start_date: new Date('2010-02-01'),
    end_date: new Date('2021-12-8'),
  },
  {
    institute_name: 'POLINTEC',
    tittle: 'Técnico Laboral en Sistemas Informáticos',
    start_date: new Date('2018-02-05'),
    end_date: new Date('2021-12-9'),
  },
  {
    institute_name: 'Instituto Tecnológico del Putumayo',
    tittle: 'Desarrollo de Sotfware',
    start_date: new Date('2022-02-01'),
    end_date: new Date('2025'),
  },
];
