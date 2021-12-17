import {FC} from "react";
import style from "./style.module.scss"
import {ICustomNode} from "../../types/props";
import CustomForm from "../CustomForm";
import { Link } from "react-router-dom";



const CustomNode: FC<ICustomNode> = ({title, nodes, rootNode}) => {
    const toBackHistory = () => window.history.back()


    return <div data-isnodes={!!nodes.length} className={style.customNode}>
        <header>
            <h1>{title}</h1>
            <button disabled={!!rootNode} onClick={toBackHistory}>
                Go to the parent node
            </button>
        </header>

        <main>
            <h3>Add new node:</h3>
            <CustomForm nodes={nodes}/>
        </main>

        <footer>
            {nodes.length
                ? <>
                    <h3>Child nodes:</h3>
                    {nodes.map(node => <Link key={node.route} to={node.route}>{node.title}</Link>)}
                  </>
                : <h3>No child nodes</h3>
            }
        </footer>
    </div>
}


export default CustomNode