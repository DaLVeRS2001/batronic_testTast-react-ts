import {Dispatch} from "redux";
import {RoutersActions} from "./reduxTypes/routers";

//REDUX
export type AllActions = RoutersActions;
export type TDefaultAC = (
    ...arg: any
) => (dispatch: Dispatch<AllActions>) => void;
