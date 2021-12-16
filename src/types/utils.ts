import {Dispatch} from "redux";
import {RoutersActions} from "./reduxTypes/routers";


//export type WithoutOptional<T> = { [K in keyof T]-?: T[K] }

//REDUX
export type AllActions = RoutersActions;
export type TDefaultAC = (
    ...arg: any
) => (dispatch: Dispatch<AllActions>) => void;
