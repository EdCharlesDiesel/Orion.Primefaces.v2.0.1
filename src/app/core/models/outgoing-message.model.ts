import {UserModel} from './user.model';

export interface OutgoingMessageModel {
  frameId: number ;
  user: UserModel | null;
  type: string;
  payload: string;
}
