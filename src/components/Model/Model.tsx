import {FC} from "react";
import cn from "classnames";
import s from "./Model.module.css"
import {Input} from "../Input";
import {useSelector} from "react-redux";
import {modelSelector} from "../../service";

export const Model: FC = () => {
    const model = useSelector(modelSelector)

    return (
        <ul className={cn(s.ul)}>
            {model.paramValues.map((param) => {
                return (
                    <li className={s.li} key={param.paramId}>
                        <Input defaultValue={param.value}/>
                    </li>
                )
            })}
        </ul>
    )
}
