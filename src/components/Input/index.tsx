import {FC} from "react";
import {IInputProps} from "../../types/props";
import {isTheSameRoute, isTheSameTitle} from "../../utils/validators";

const Input: FC<IInputProps> =
    ({label, register, name, error, nodes, required}) => {
    const errorBorder = error?.message ? {border: '1px solid red'} : {}
    const validFunc = name === 'title' ? isTheSameTitle : isTheSameRoute

    return <div>
        {label && <label>{label}</label>}

        <input
            style={errorBorder}
            {...register(name, {
                required, validate: val=> validFunc(nodes, val)
            })}
        />

        {error?.message && <small style={{color: 'red'}}>{error.message}</small>}
    </div>
};


export default Input