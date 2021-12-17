import {Route, Routes } from "react-router-dom"
import {useTypedSelector} from "./hooks/useTypedSelector";
import {IRouter} from "./types/reduxTypes/routers";
import CustomNode from "./components/CustomNode";
import {ReactNode} from "react";

const Routers = () => {
    const routers = useTypedSelector(state => state.routers.routers)

    const returnNode = (node: IRouter): ReactNode => {
        console.log('111111111111111111')
        return  <Route
            key={node.route}
            path={node.route}
            element={<CustomNode title={node.title} nodes={node.nodes}/>}
        />
    }


    const returnRoute = (router: IRouter ): ReactNode[] => {
        const nodes: IRouter[] = router.nodes
        if(nodes.length) return nodes.map((node, idx) => {
            if(!idx) return [returnNode(router), returnNode(node), returnRoute(node)]
            return [returnNode(node)]
        })
        return [returnNode(router)]
    }


    return <Routes>
        {routers.map(router=> returnRoute(router))}
    </Routes>
}


export default Routers