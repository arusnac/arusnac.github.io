import { createSlice } from '@reduxjs/toolkit';
import Portfolio from '../Pages/Portfolio';

const windowState = {
    windows: [
        { id: 'about', isOpen: false, isFocus: false },
        { id: 'portfolio', isOpen: false, isFocus: false },
        { id: 'contact', isOpen: false, isFocus: false },
        { id: 'experience', isOpen: false, isFocus: false }
    ]
};

const initialState = {
    windows: [
        { id: 'about', isOpen: false, isFocus: false },
        { id: 'portfolio', isOpen: false, isFocus: false },
        { id: 'contact', isOpen: false, isFocus: false },
        { id: 'experience', isOpen: false, isFocus: false }
    ]
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'window/windowOpen': {
            return {
                ...state,
                windows: state.windows.map(window => {
                    if (window.id !== action.payload) {
                        return window;
                    }

                    return {
                        ...window,
                        isOpen: !window.isOpen
                    }
                })
            }
        }

        default:
            return state
    }
}