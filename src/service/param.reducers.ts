import {IParamState} from "./param.slice.ts";
import {PayloadAction} from "@reduxjs/toolkit";
import {IParam} from "../types/param.interface.ts";
import {IParamValue} from "../types/param.value.interface.ts";

export const paramReducers = {
    addParam: (state: IParamState) => {
        state.params.push({id: new Date().getMilliseconds(), name: 'Новое'})
    },
    deleteParam: (state: IParamState, action: PayloadAction<IParam>) => {
        const index = state.params.findIndex( num => num.id === action.payload.id)
        return state.params.splice(index,1)
    },
    editParam: (state: IParamState, action: PayloadAction<IParam>) => {
        const {id, name} = action.payload
        const findIndex = state.params.findIndex(num => num.id === id)
        return state.params[findIndex].name = name
    },
    deleteModel: (state: IParamState, action: PayloadAction<IParamValue>) => {
        const index = state.model.paramValues.findIndex( num => num.paramId === action.payload.paramId)
        return state.model.paramValues.splice(index,1)
    },
    editeModel: (state: IParamState, action: PayloadAction<IParamValue>) => {
        const {value, paramId} = action.payload
        const findIndex = state.model.paramValues.findIndex(num => num.paramId === paramId)
        return state.model.paramValues[findIndex].value = value
    },
    addPModel: (state: IParamState) => {
        state.model.paramValues.push({paramId: new Date().getMilliseconds(), value: 'Новое'})
    },
}
