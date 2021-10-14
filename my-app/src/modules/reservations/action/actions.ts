import { ACTION_TYPES } from "../../modules/enumActions";
import { IReservation } from "../../modules/models";

export function addReservation(reservation:IReservation){
    return{
        type: ACTION_TYPES.ADD_RESERVATION,
        payload: reservation,
    }
}
export function updateReservation(reservationId:number){
    return{
        type: ACTION_TYPES.UPDATE_RESERVATION,
        payload: reservationId,
    }
}
