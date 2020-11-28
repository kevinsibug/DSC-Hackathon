import {
    SHOW_CATEGORY,
    REVIEW_LISTING,
    CHAT_LISTING,
    SET_LOADING,
  } from "./types";
  

export default (state, action) => {
    switch(action.type) {
        case SHOW_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        // case SET_LOADING:
        //     return {
        //         ...state,
        //         loading: true,
        //     }

        default:
            return state
    }
}