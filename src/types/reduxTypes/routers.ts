export interface IRouter  {
    route: string
    nodes: Node[]
    title: string
}
type Node = IRouter

export enum RoutersActionTypes{
    TEST= 'TEST'
}

interface ITestAction{
    type: RoutersActionTypes.TEST
    payload: string
}

export interface IRoutersState{
    routers: IRouter[]
}

export type RoutersActions = ITestAction