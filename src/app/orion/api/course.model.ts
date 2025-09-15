export class Course{
  id?: number;
  name!: string;
  description?: string | undefined;
  durationInMinutes!: number;
  isMandatory!: boolean;
  createdAt!: Date;
  updatedAt?: Date | undefined;
  isActive!: boolean;

}

export interface ICourse {
  id?: number;
  name: string;
  description?: string | undefined;
  durationInMinutes: number;
  isMandatory: boolean;
  createdAt: Date;
  updatedAt?: Date | undefined;
  isActive: boolean;
}
