import {IRouter} from "./reduxTypes/routers";
import {FieldError, Path, UseFormRegister} from "react-hook-form";

export interface ICustomNode{
    title: string
    nodes: IRouter[]
}

export interface IFormInput{
    title: string
    route: string
}

export interface IInputProps {
    label?: string
    register: UseFormRegister<IFormInput>
    required?: boolean | string
    name: Path<IFormInput>
    error?: FieldError
    nodes: IRouter[]
}

export interface ICustomForm{
    nodes: IRouter[]
}