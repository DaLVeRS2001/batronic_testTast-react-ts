import {FC} from "react";
import {IInputProps} from "../../types/props";

const Input: FC<IInputProps> =
    ({ label, register, required, name, error}) => {
    const errorBorder = error?.message ? {border: '1px solid red'} : {}
    return <>
        {label && <label>{label}</label>}
        <input style={errorBorder}  {...register(name, {required})} />
        {error?.message && <small style={{color: 'red'}}>{error.message}</small>}
    </>
};


export default Input