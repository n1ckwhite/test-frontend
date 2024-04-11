import {FC} from "react";
import {useSelector} from "react-redux";
import {addParamReduce, paramsSelector, useAppDispatch} from "../../service";
import {Button} from "../Button";
import {Param} from "./components/Param";

export const Params: FC = () => {
    const params = useSelector(paramsSelector)
    const dispatch = useAppDispatch()

    return (
        <ul>
            {params.map((param) => {
                return (
                    <li key={param.id}>
                        <Param
                            name={param.name}
                            id={param.id}/>
                    </li>
                )
            })}
            <Button
                onClick={() => dispatch(addParamReduce())}
                text="Добавить"/>
        </ul>
    )
}
