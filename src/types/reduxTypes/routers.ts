export enum RoutersActionTypes{
    TEST= 'TEST'
}

interface ITestAction{
    type: RoutersActionTypes.TEST
    payload: string
}

export interface IRoutersState{
    routers: { route: string, nodes: string[], title: string }[]
}

export type RoutersActions = ITestAction