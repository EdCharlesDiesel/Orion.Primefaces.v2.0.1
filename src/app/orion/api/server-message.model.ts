import {ChatClientModel} from './chat-client.model';

export interface ServerMessageModel {
  id: string;
  client: ChatClientModel | any;
  type: string;
  payload: string;
  timestamp: Date;
}
