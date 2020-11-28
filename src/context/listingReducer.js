import {
    SHOW_CATEGORY,
    RESET_CATEGORY,
    SHOW_TEXT,
    SHOW_LOCATION,
  } from "./types";
  

export default (state, action) => {
    switch(action.type) {
        case SHOW_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case RESET_CATEGORY:
            return {
                ...state,
                category: '',
            }
        case SHOW_TEXT:
            return {
                ...state,
                text: action.payload,
            }
        case SHOW_LOCATION:
            return {
                ...state,
                location: action.payload,
            }

        default:
            return state
    }
}