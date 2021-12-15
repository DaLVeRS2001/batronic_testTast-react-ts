import {TDefaultAC} from "../../types/utils";
import {Dispatch} from "redux";
import {RoutersActions, RoutersActionTypes} from "../../types/reduxTypes/routers";

export const test: TDefaultAC =
    (test: string) => (dispatch: Dispatch<RoutersActions>) => {
        dispatch({ type: RoutersActionTypes.TEST, payload: '' });
    }