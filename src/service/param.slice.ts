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
        colors: ['пусто']
    }
}

export const paramSlice = createSlice({
    name: 'param',
    initialState,
    reducers: {
        addParamReduce: (state) => {
            paramReducers.addParam(state)
        },
        deleteParamReduce: (state, action) => {
            paramReducers.deleteParam(state,action)
        },
        editeParamReduce: (state, action) => {
            paramReducers.editParam(state,action)
        },
        deleteModelReduce: (state, action) => {
            paramReducers.deleteModel(state,action)
        },
        editModelReduce: (state, action) => {
            paramReducers.editeModel(state,action)
        },
        addModelReduce: (state) => {
            paramReducers.addPModel(state)
        },
    },
    selectors: {
        paramsSelector: (sliceState) => sliceState.params,
        modelSelector: (sliceState) => sliceState.model,
    }
})


export const {
    addParamReduce,
    deleteParamReduce,
    deleteModelReduce,
    editeParamReduce,
    editModelReduce,
    addModelReduce} = paramSlice.actions


export const {
    paramsSelector,
    modelSelector
} = paramSlice.selectors


