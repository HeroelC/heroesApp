export interface Heroes extends CreateHeroeDTO{
  id: string;
}

export interface CreateHeroeDTO{
  name: string;
  description?: string;
  power?: number;
  img: string;
  type: 'hero' | 'villain';
}

export type UpdateHeroeDTO = Partial<CreateHeroeDTO>;
