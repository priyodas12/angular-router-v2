import { User } from './user';

export interface Page<T> {
  content: User[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}
