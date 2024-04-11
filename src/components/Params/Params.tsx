import {FC} from "react";
import s from "./Params.module.css"
import {useSelector} from "react-redux";
import {paramsSelector} from "../../service";

export const Params: FC = () => {
    const params = useSelector(paramsSelector)

    return (
        <ul className={s.ul}>
            {params.map((param) => {
                return (
                    <li className={s.li} key={param.id}>
                        {param.name}
                    </li>
                )
            })}
        </ul>
    )
}
