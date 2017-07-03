import { applyMiddleware, createStore, Reducer } from "redux";
import thunk from 'redux-thunk';
import { State } from "./state";

export const middleware = [thunk];

export const configureStore = (reducer: Reducer<State>) => {
    return createStore(reducer, applyMiddleware(...middleware));
};
