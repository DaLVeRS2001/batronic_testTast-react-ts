import produce from "immer";
import {IRoutersState, RoutersActions, RoutersActionTypes} from "../../types/reduxTypes/routers";


const initialState: IRoutersState = {
    routers: [
        { route: '/main', nodes: [], title:'Main' }
    ]
}

const routersReducer = (state = initialState , action: RoutersActions): IRoutersState => {
    switch (action.type){
        case RoutersActionTypes.TEST:
            return produce(state, draft => {

            })
        default:
            return state
    }
}


export default routersReducer