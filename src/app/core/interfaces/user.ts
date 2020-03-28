import { ITask } from './task';
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tasks: ITask[];
}
