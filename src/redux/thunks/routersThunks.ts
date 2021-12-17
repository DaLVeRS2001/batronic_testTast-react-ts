import {TDefaultAC} from "../../types/utils";
import {Dispatch} from "redux";
import {IRouter, RoutersActions, RoutersActionTypes} from "../../types/reduxTypes/routers";

export const addNode: TDefaultAC =
    (node: IRouter) => (dispatch: Dispatch<RoutersActions>) => {
        dispatch({ type: RoutersActionTypes.ADD_NODE, payload: node });
    }