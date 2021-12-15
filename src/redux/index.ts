import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import routersReducer from "./reducers/routersReducer";

const reducers = combineReducers({
    routers: routersReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type RootReducer = ReturnType<typeof reducers>

//@ts-ignore
window.getState = () => {
    return store.getState()
}
