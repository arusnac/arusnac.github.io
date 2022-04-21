import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    windows: [
        { id: 'about', isOpen: false, isFocus: false },
        { id: 'portfolio', isOpen: false, isFocus: false },
        { id: 'experience', isOpen: false, isFocus: false },
        { id: 'contact', isOpen: false, isFocus: false },
        { id: 'info', isOpen: true, isFocus: true },
    ],
    navbar: [
        { id: 'menu', isOpen: false }
    ]
}


// const initialState = {
//     about: { isOpen: false, isFocus: false },
//     portfolio: { isOpen: false, isFocus: false },
// }

export const windowSlice = createSlice({
    name: 'window',
    initialState: { value: initialState },
    reducers: {
        changeStatus: (state, action) => {
            state.value = action.payload
            return state
        },
        toggleMenu: (state, action) => {
            state.value.navbar[0].isOpen = !state.value.navbar[0].isOpen
        },
        toggleOpen: (state, action) => {
            for (const i in state.value.windows) {
                if (state.value.windows[i].id === action.payload) {
                    state.value.windows[i].isOpen = !state.value.windows[i].isOpen
                    if (state.value.navbar[0].isOpen === true) {
                        state.value.navbar[0].isOpen = false;
                    }
                }
            }
        },
        toggleFocus: (state, action) => {
            for (const i in state.value.windows) {
                console.log(i)
                if (state.value.windows[i].id === action.payload) {
                    if (state.value.windows[i].isFocus === true) {
                        return
                    } else {
                        state.value.windows[i].isFocus = !state.value.windows[i].isFocus
                    }
                } else {
                    if (state.value.windows[i].isFocus === true) {
                        state.value.windows[i].isFocus = false;
                    }
                }
            }
        }
    }
});




export const { changeStatus, toggleOpen, toggleFocus, toggleMenu } = windowSlice.actions;
export default windowSlice.reducer;