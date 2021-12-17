export interface IRouter  {
    route: string
    nodes: Node[]
    title: string
}
type Node = IRouter

export enum RoutersActionTypes{
    ADD_NODE= 'ADD_NODE'
}

interface ITestAction{
    type: RoutersActionTypes.ADD_NODE
    payload: IRouter
}

export interface IRoutersState{
    routers: IRouter[]
}

export type RoutersActions = ITestAction