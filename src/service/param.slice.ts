import { createSlice } from '@reduxjs/toolkit'
import {IParam} from "../types/param.interface.ts";
import {IModel} from "../types/model.interface.ts";
import {paramReducers} from "./param.reducers.ts";

export interface IParamState {
    params: IParam[]
    model: IModel
}

const initialState: IParamState = {
    params: [
        {
            id: 1,
            name: 'Назначение'
        },
        {
            id: 2,
            name: 'Длинна'
        },
    ],
    model: {
        paramValues: [
            {
                paramId: 1,
                value: 'повседневное'
            },
            {
                paramId: 2,
                value: 'макси'
            }
        ],
        colors: ['красный']
    }
}

export const paramSlice = createSlice({
    name: 'param',
    initialState,
    reducers: {
        addParam: (state,action) => {
            paramReducers.addParam(state,action)
        }
    },
    selectors: {
        paramsSelector: (sliceState) => sliceState.params,
        modelSelector: (sliceState) => sliceState.model,
    }
})


export const { addParam } = paramSlice.actions


export const {
    paramsSelector,
    modelSelector
} = paramSlice.selectors


