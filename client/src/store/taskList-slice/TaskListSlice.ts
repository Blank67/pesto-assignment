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
        updateTask: (state, action: PayloadAction<TaskState>) => {
            const updatedTask = action.payload.task;
            const existingTaskIndex = state.taskList.findIndex(
                (task) => task.id === updatedTask.id
            );
            if (existingTaskIndex !== -1) {
                state.taskList[existingTaskIndex] = updatedTask;
                localStorage.setItem(
                    "tsk_data",
                    JSON.stringify(state.taskList)
                );
            }
        },
    },
});

export const { setMasterData, addTask, updateTask } = taskListSlice.actions;

export const taskListReducer = taskListSlice.reducer;
