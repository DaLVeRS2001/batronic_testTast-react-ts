import produce from "immer";
import {IRoutersState, RoutersActions, RoutersActionTypes} from "../../types/reduxTypes/routers";
import {findItemNested, getPathFirstPart} from "../../utils/someMethods";


const initialState: IRoutersState = {
    routers: [
        {
            route: '/main',
            nodes: [],
            title: 'Main'
        }
    ]
}

const routersReducer = (state = initialState , action: RoutersActions): IRoutersState => {
    switch (action.type){
        case RoutersActionTypes.ADD_NODE:
            return produce(state, (draft) => {
               findItemNested(
                   draft.routers,
                   getPathFirstPart(action.payload.route), "nodes", action.payload
               )
            })
        default:
            return state
    }
}


export default routersReducer