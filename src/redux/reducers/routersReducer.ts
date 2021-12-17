import produce from "immer";
import {IRoutersState, RoutersActions, RoutersActionTypes} from "../../types/reduxTypes/routers";


const initialState: IRoutersState = {
    routers: [
        {
            route: '/main',
            nodes: [
                {
                    route: '/main/main01',
                    nodes: [
                        {
                            route: '/main01/main01/main03',
                            nodes: [],
                            title: 'Main01-01-03'
                        }
                    ],
                    title: 'Main01-01'
                },
                {
                    route: '/main01/main01/main01',
                    nodes: [
                        {
                            route: '/main01/main01/main03',
                            nodes: [],
                            title: 'Main01-01-03'
                        }
                    ],
                    title: 'Main01-01-01'
                }
            ],
            title: 'Main'
        },
        {
            route: '/main2',
            nodes: [],
            title: 'Main2',
        }
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