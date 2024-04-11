import {IParamState} from "./param.slice.ts";
import {PayloadAction} from "@reduxjs/toolkit";
import {IParam} from "../types/param.interface.ts";

export const paramReducers = {
    addParam: (state: IParamState,action: PayloadAction<IParam>) => {
        state.params.push(action.payload)
    }

}
