import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskListArrayState } from "@customTypes/types";
import { DUMMY_DATA } from "@src/utils/data";

const initialState: TaskListArrayState = {
    // taskList: [],
    taskList: DUMMY_DATA,
};

const taskListSlice = createSlice({
    name: "Task List Data",
    initialState,
    reducers: {
        setMasterData: (state, action: PayloadAction<TaskListArrayState>) => {
            state.taskList = action.payload.taskList;
        },
        addTask: (state, action: PayloadAction) => {},
        updateTask: (state, action: PayloadAction) => {},
    },
});

export const { setMasterData, addTask, updateTask } = taskListSlice.actions;

export const taskListReducer = taskListSlice.reducer;
