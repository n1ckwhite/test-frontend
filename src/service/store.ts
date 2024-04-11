import {configureStore} from "@reduxjs/toolkit";
import {paramSlice} from "./param.slice.ts";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        param: paramSlice.reducer
    }
})


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
