// import { createSlice } from '@reduxjs/toolkit';
// import Portfolio from '../Pages/Portfolio';

const initialState = [
    { id: 'about', isOpen: false, isFocus: false },
    { id: 'portfolio', isOpen: false, isFocus: false },
    { id: 'contact', isOpen: false, isFocus: false },
    { id: 'experience', isOpen: false, isFocus: false }
]

export default function windowsReducer(state = initialState, action) {

}

// export const windowSlice = createSlice({
//     name: 'window',
//     initialState: { value: initialStateValue },
//     reducers: {
//         changeStatus: (state, action) => {
//             state.value = action.payload
//             return state;
//         },
//     },
// });

// export const { changeStatus } = windowSlice.actions;
// export default windowSlice.reducer;