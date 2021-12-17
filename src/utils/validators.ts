import {IRouter} from "../types/reduxTypes/routers";
import {CustomValidator} from "../types/utils";

export const isCorrectRoute: CustomValidator = (nodes: IRouter[], route: string)=> {
    const isTheSame = nodes.some(node=>  {
        const routeLastPart = `/${node.route.split('/').at(-1)}`
        return routeLastPart === route
    })
    const isCorrectFormat = /^\/\w+$/.test(route)

    if(isTheSame) return 'У этого родителя уже имеется ребёнок с таким route'
    if(!isCorrectFormat) return 'Не правильный формат route: /route1'
    return undefined
}


export const isCorrectTitle: CustomValidator = (nodes: IRouter[], title: string) => {
    const isTheSame = nodes.some(node=> node.title === title)
    const isCorrectFormat = /^\w+$/.test(title)

    if(isTheSame) return 'У этого родителя уже имеется ребёнок с таким title'
    if(!isCorrectFormat) return 'Не правильный формат title: title1'
    return undefined
}