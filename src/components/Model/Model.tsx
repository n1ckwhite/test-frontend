import {FC} from "react";
import {useSelector} from "react-redux";
import {addModelReduce, modelSelector, useAppDispatch} from "../../service";
import {Button} from "../Button";
import {ModelItem} from "./components/ModelItem";

export const Model: FC = () => {
    const dispatch = useAppDispatch()
    const model = useSelector(modelSelector)
    return (
        <ul>
            {model.paramValues.map(({paramId, value}) => {
                return (
                    <li key={paramId}>
                        <ModelItem
                            value={value}
                            paramId={paramId}/>
                    </li>
                )
            })}
            <Button
                onClick={() => dispatch(addModelReduce())}
                text="Добавить"/>
        </ul>
    )
}
