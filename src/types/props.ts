import {IRouter} from "./reduxTypes/routers";

export interface ICustomNode{
    title: string
    nodes: IRouter[]
}