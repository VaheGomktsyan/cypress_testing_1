import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {ITask} from "../../type/type"


const initialState: { tasks: ITask[]; task: ITask } = {
    tasks: [],
    task: {} as ITask,
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        
    },
 
});

export const selectTask = (st: RootState) => st.task;
export const { } = taskSlice.actions;
export default taskSlice.reducer;
