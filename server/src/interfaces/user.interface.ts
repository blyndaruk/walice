import { Document } from 'mongoose';

export interface User extends Document {
  readonly id: number;
  readonly user_name: string;
  readonly user_email: string;
  readonly password: string;
}
