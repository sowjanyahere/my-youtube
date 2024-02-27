import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState: {
        isMenuOpen:true,
    },
    reducers: {
        isToggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});

export const {isToggleMenu} = appSlice.actions;

export default appSlice.reducer;