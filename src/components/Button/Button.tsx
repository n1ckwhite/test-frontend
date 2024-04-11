import {FC, HTMLAttributes} from "react";
import s from './Button.module.css'
interface IButton extends HTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button: FC<IButton> = ({text, ...props}) => {
    return (
        <button className={s.button} {...props}>{text}</button>
    )
}
