import {FC, HTMLAttributes} from "react";
import s from './Input.module.css'

interface IInput extends HTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInput> = ({...props}) => {
    return (
        <input className={s.input} {...props}/>
    )
}
