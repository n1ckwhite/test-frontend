import {FC, useState} from "react";
import {Input} from "../../../Input";
import {Button} from "../../../Button";
import {deleteModelReduce, editModelReduce, useAppDispatch} from "../../../../service";

interface IModelItem {
    value: string
    paramId: number
}

export const ModelItem: FC<IModelItem> = ({value, paramId}) => {
    const dispatch = useAppDispatch()
    const [input, setInput] = useState(value)
    const del = (id: number) => {
        dispatch(deleteModelReduce(id))
    }
    const edit = () => {
        dispatch(editModelReduce({paramId, value: input}))
    }
    return (
        <>
            <Input
                onChange={(e) => setInput(e.target.value)}
                defaultValue={input}/>
            <Button
                onClick={edit}
                text={input !== value ? 'готово' : 'ред.'}/>
            <Button onClick={() => del(paramId)} text="&times;"/>
        </>
    )
}
