
import { DELETE_PRODUCT, ADD_PRODUCTS, UDPATE_PRODUCT, CHANGE_VIEW } from "../actions/action_types";

const initialState = {
    productList: [],
    singleView: true,
};

const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                productList: action.payload
            };
        case ADD_PRODUCTS:
            return {
                ...state,
                productList: action.payload
            };
        case UDPATE_PRODUCT:
            return {
                ...state,
                productList: action.payload
            };
        case CHANGE_VIEW:
            return {
                ...state,
                singleView: !state.singleView
            };
        default:
            return state;
    }
};

export default shoppingReducer;