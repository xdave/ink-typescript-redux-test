import { reducerWithInitialState } from "typescript-fsa-reducers/dist";
import { State, Timer } from "../store/state";
import * as actions from "../actions";

const initial: State['counter'] = {
    timers: {}
};

export const counter = reducerWithInitialState(initial)
    .case(actions.increment, (state, id) => {
        return {
            ...state,
            timers: {
                ...state.timers,
                [id]: {
                    ...state.timers[id],
                    i: state.timers[id].i + 1
                }
            }
        };
    })
    .case(actions.startTimerAsync.done, (state, { params, result }) => {
        const { id } = params;
        const i = typeof state.timers[id] === 'undefined'
            ? 0 : state.timers[id].i;

        return {
            ...state,
            timers: {
                ...state.timers,
                [id]: {
                    ...state.timers[id],
                    timer: result,
                    i
                }
            }
        };
    })
    .case(actions.stopTimer, (state, id) => {
        const timer = state.timers[id];

        if (timer) {
            clearInterval(timer.timer);
        };
        return {
            ...state,
            timers: {
                ...state.timers
            }
        };
    })
    .build();
