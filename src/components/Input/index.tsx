import {FC} from "react";
import {IInputProps} from "../../types/props";
import {isCorrectRoute, isCorrectTitle} from "../../utils/validators";


const Input: FC<IInputProps> =
    ({label, register, name, error, nodes, required}) => {

        const errorBorder = error ? {border: '1px solid red'} : {},
            toCorrectFieldFormat = name === 'title' ? isCorrectTitle : isCorrectRoute

        return <div>
            {label && <label>{label}</label>}
            <input
                style={errorBorder}
                {...register(name, {
                    required,
                    validate: val => toCorrectFieldFormat(nodes, val)
                })}
            />
            {error?.message && <small style={{color: 'red'}}>{error.message}</small>}
        </div>
    };


export default Input