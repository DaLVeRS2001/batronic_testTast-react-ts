import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICustomForm, IFormInput} from "../../types/props";
import Input from "../Input";
import {connect} from "react-redux";
import {addNode} from "../../redux/thunks/routersThunks";


const CustomForm: FC<ICustomForm> = ({nodes, addNode}) => {
    const {formState: {errors}, register, reset, handleSubmit} = useForm<IFormInput>()

    useEffect(()=> {
        reset()
    }, [window.location.pathname])

    const onSubmit: SubmitHandler<IFormInput> = data => {
        const path = window.location.pathname
        const parsedData = {
            ...data,
            route: path + data.route,
            nodes: []
        }
        addNode(parsedData)
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


export default connect(null, {addNode})(CustomForm)