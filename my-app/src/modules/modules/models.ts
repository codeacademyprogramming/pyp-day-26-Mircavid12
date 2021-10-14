import { ACTION_TYPES } from "./enumActions";

export interface IReservation {
  id: number|string;
  roomId: number|string;
  reservedBy: string;
  from: string;
  to: string;
  notes: string;
}
interface IRoomSize {
  width: string | number;
  height: string | number;
}
interface IRoomLocation {
  x: string | number;
  y: string | number;
}
export interface IRoom {
  id: number;
  reservations: IReservation[];
  size: IRoomSize;
  location: IRoomLocation;
}
export interface IAction {
  type: ACTION_TYPES;
  payload: IReservation
}