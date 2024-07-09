import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoaderState } from "@customTypes/types";

const initialState: LoaderState = {
    pageLoading: false,
};

const loaderSlice = createSlice({
    name: "Loader State",
    initialState,
    reducers: {
        togglePageLoader: (state, action: PayloadAction<boolean>) => {
            state.pageLoading = action.payload;
        },
    },
});

export const { togglePageLoader } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
