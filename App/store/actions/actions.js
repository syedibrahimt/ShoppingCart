import { DELETE_PRODUCT, ADD_PRODUCTS, UDPATE_PRODUCT, CHANGE_VIEW } from "./action_types";

export const deleteProduct = (data) => {
    return {
        type: DELETE_PRODUCT,
        payload: data
    };
}

export const addProducts = (data) => {
    return {
        type: ADD_PRODUCTS,
        payload: data
    };
}

export const updateProduct = (data) => {
    return {
        type: UDPATE_PRODUCT,
        payload: data
    };
}

export const changeView = () => {
    return {
        type: CHANGE_VIEW,
    };
}