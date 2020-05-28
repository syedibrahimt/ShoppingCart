import { createStore, combineReducers } from 'redux';
import shoppingReducer from './reducers/reducer';

const rootReducer = combineReducers({
    shopping: shoppingReducer,
});

const configStore = () => {
    return createStore(rootReducer);
};

export default configStore;