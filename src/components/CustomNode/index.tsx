import {FC} from "react";
import {ICustomNode} from "../../types/props";


const CustomNode: FC<ICustomNode> = ({title, nodes}) => {
    return <>
        {title}
    </>
}


export default CustomNode