import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState: {
        isMenuOpen:true,
    },
    reducers: {
        isToggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen =false;
        }
    }
});

export const {isToggleMenu,closeMenu} = appSlice.actions;

export default appSlice.reducer;