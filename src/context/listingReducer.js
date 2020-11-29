import {
    SHOW_CATEGORY,
    RESET_CATEGORY,
    SHOW_TEXT,
    SHOW_LOCATION,
    SET_SHOP,
    SHOW_SUBSCRIPTION,
    SET_CHAT,
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
        case SET_SHOP:
            return {
                ...state,
                shop: action.payload,
            }
        case SHOW_SUBSCRIPTION:
            return {
                ...state,
                subscription: action.payload,
            }    

        case SET_CHAT:
            return {
                ...state,
                chat: action.payload,
            }


        default:
            return state
    }
}