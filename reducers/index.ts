import { combineReducers, Reducer } from "redux";
import { counter } from "./counter";
import { State } from "../store/state";

export default combineReducers({ counter }) as Reducer<State>;
