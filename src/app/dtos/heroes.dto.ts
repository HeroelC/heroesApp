export interface Heroes extends CreateHeroDTO{
  id: string;
}

export interface CreateHeroDTO{
  name: string;
  description?: string;
  power?: number;
  img: string;
  type: 'hero' | 'villain';
}

export type UpdateHeroDTO = Partial<CreateHeroDTO>;
