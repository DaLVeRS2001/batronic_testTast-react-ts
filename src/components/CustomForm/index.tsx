import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICustomForm, IFormInput} from "../../types/props";
import Input from "../Input";



const CustomForm: FC<ICustomForm> = ({nodes}) => {
    const {formState: {errors}, register, reset, handleSubmit} = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
        reset()
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <Input
            error={errors.title} name={'title'} register={register}
            required={'Обезательное поле'} label={'Title'} nodes={nodes}
        />
        <Input
            error={errors.route} name={'route'} register={register}
            required={'Обезательное поле'} label={'Route'} nodes={nodes}
        />
        <button>Submit</button>
    </form>
}


export default CustomForm