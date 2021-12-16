import {FC} from "react";

import style from "./style.module.scss"
import {ICustomNode} from "../../types/props";
import CustomForm from "../CustomForm";



const CustomNode: FC<ICustomNode> = ({title, nodes}) => {
    return <div className={style.customNode} >
        <CustomForm/>
        {title}
    </div>
}


export default CustomNode