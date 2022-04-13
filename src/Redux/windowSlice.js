import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    windows: [
        { id: 'about', isOpen: false, isFocus: false },
        { id: 'portfolio', isOpen: false, isFocus: false },
        { id: 'experience', isOpen: false, isFocus: false },
        { id: 'contact', isOpen: false, isFocus: false }
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
        toggleOpen: (state, action) => {
            for (const i in state.value.windows) {
                if (state.value.windows[i].id === action.payload) {
                    state.value.windows[i].isOpen = !state.value.windows[i].isOpen
                }
            }
        },
        toggleFocus: (state, action) => {
            for (const i in state.value.windows) {
                console.log(i)
                if (state.value.windows[i].id === action.payload) {
                    console.log(state.value.windows)
                    state.value.windows[i].isFocus = !state.value.windows[i].isFocus
                } else {
                    if (state.value.windows[i].isFocus === true) {
                        state.value.windows[i].isFocus = false;
                    }
                }
            }
        }
    }
});



// return {
//     ...state,
//     windows: state.value.windows.map(window => {
//         if (window.id !== action.payload.toString()) {
//             console.log(action.payload.toString());

//             return window;
//         }

//         return {
//             ...window,
//             isOpen: !window.isOpen

//         }
//     })
// }

//             let test = ...action.payload
//             if(action.payload === state.value)
// console.log(state.value)
// state.value = action.payload
// console.log(state)
// console.log(state.value)
//         },
//     },



export const { changeStatus, toggleOpen, toggleFocus } = windowSlice.actions;
export default windowSlice.reducer;