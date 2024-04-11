import {FC, useState} from "react";
import s from "./Param.module.css";
import {Input} from "../../../Input";
import {Button} from "../../../Button";
import {deleteParamReduce, editeParamReduce, useAppDispatch} from "../../../../service";
import {IParam} from "../../../../types/param.interface.ts";

export const Param: FC<IParam> = ({name,id}) => {
    const [textInput, setInputText] = useState(name)
    const [edit,setEdit] = useState(false)
    const dispatch = useAppDispatch()
    const del =  (id: number) => {
        dispatch(deleteParamReduce(id))
    }
    const editParam = () => {
        dispatch(editeParamReduce({id, name: textInput}))
        console.log(textInput)
        setEdit(false)
    }
    return (
        <div className={s.param}>
            {!edit &&
                <p className={s.name}>{name}</p>
            }
            {edit &&
                <Input
                onChange={(e) => setInputText(e.target.value)}
                value={textInput} />}
            {!edit &&
                <Button
                onClick={() => setEdit(!edit)}
                text="ред."/>}
            {edit &&
                <Button
                    onClick={editParam}
                    text="готово"/>}
            <Button
                onClick={() => del(id)}
                text="&times;"/>
        </div>
    )
}
