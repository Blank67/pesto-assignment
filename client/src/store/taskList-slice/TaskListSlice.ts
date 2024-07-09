import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskListArrayState, TaskState } from "@customTypes/types";

const initialState: TaskListArrayState = {
    taskList: [],
};

const taskListSlice = createSlice({
    name: "Task List Data",
    initialState,
    reducers: {
        setMasterData: (state, action: PayloadAction<TaskListArrayState>) => {
            state.taskList = action.payload.taskList;
        },
        addTask: (state, action: PayloadAction<TaskState>) => {
            state.taskList = [action.payload.task, ...state.taskList];
            localStorage.setItem("tsk_data", JSON.stringify(state.taskList));
        },
        updateTask: (state, action: PayloadAction) => {},
    },
});

export const { setMasterData, addTask, updateTask } = taskListSlice.actions;

export const taskListReducer = taskListSlice.reducer;
