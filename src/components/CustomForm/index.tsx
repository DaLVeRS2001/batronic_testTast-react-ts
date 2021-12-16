import {FC} from "react";
//import style from "./style.module.scss"
import {SubmitHandler, useForm} from "react-hook-form";
import {ICustomForm, IFormInput} from "../../types/props";
import Input from "../Input";



const CustomForm: FC<ICustomForm> = ({}) => {
    const {formState: {errors}, register, reset, handleSubmit} = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
        reset()
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
       <Input
           error={errors.title} name={'title'} register={register}
           required={'Обезательное поле'} label={'Title'}
       />
       <Input
           error={errors.route} name={'route'} register={register}
           required={'Обезательное поле'} label={'Route'}
       />
       <button>Submit</button>
    </form>
}


export default CustomForm