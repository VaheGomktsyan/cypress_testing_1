import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ITask } from "../../type/type"


const initialState: { tasks: ITask[]; task: ITask } = {
    tasks: [
        { id: 1, name: "I will wake up at 8 in the morning" },
        { id: 2, name: 'I will practice html for 1 hour' },
        { id: 3, name: 'I will give time for 2 hours css' },
        { id: 4, name: 'Then I will have breakfast' },
    ],
    task: {} as ITask,
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        delTaskById: (state, action) => {
            state.tasks = state.tasks.filter(elm => elm.id != action.payload)
        },
        findFilmById: (state, action) => {
            const t = state.tasks.find(elm => elm.id == action.payload)
            if (t) {
                state.task = t
            }
        }
    },

});

export const { addTask, delTaskById, findFilmById } = taskSlice.actions;
export default taskSlice.reducer;
