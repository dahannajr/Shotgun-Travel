import {Participant} from './participant';
import { UUID } from 'angular2-uuid';

export class Shotgun {
  id: number;
  guid: string;
  participants: Participant[];

  constructor() {
    this.guid = UUID.UUID();
    this.participants = [] as Participant[];
  }
}