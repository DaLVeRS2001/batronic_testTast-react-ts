import {IRouter} from "../types/reduxTypes/routers";

export const isTheSameRoute = (nodes: IRouter[], route: string): string | undefined => {
    const isTheSame = nodes.some(node=>  {
        const routeLastPart = `/${node.route.split('/').at(-1)}`
        return routeLastPart === route
    })
    if(isTheSame) return 'У этого родителя уже имеется ребёнок с таким route'
    return undefined
}

export const isTheSameTitle = (nodes: IRouter[], title: string): string | undefined => {
    const isTheSame = nodes.some(node=> node.title === title)
    if(isTheSame) return 'У этого родителя уже имеется ребёнок с таким title'
    return undefined
}