import { configureStore } from "@reduxjs/toolkit";
import { loaderReducer } from "@store/loader-slice/loaderSlice";
import { taskListReducer } from "./taskList-slice/TaskListSlice";

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        taskList: taskListReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
