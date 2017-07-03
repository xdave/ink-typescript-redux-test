import actionCreatorFactory from 'typescript-fsa';
import { bindThunkAction } from 'typescript-fsa-redux-thunk';
import { State } from "../store/state";

const create = actionCreatorFactory('inktest');

export const increment = create<string>('INCREMENT');

interface TimerParams {
    id: string;
    interval: number;
}
export const startTimerAsync =
    create.async<State, TimerParams, NodeJS.Timer, Error>('START_TIMER');
export const startTimer = bindThunkAction(startTimerAsync,
    async ({ id, interval }, dispatch, getState) =>
        setInterval(() => dispatch(increment(id)), interval));

export const stopTimer = create<string>('STOP_TIMER');
