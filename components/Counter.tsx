import { h, Component } from 'ink';
import { Green } from './color';
import { Store } from 'redux';
import { State, Timer } from '../store/state'
import { startTimer, stopTimer } from '../actions'

export interface Props {
    id: string;
    interval: number;
}

export class Counter extends Component<Props, {}> {
    context: Store<State>;

    render() {
        const timer = this.context.getState().counter.timers[this.props.id];
        const i = timer ? timer.i : 0;
        return (
            <Green>
                {`00${i}`.slice(-3)} tests passed
            </Green>
        );
    }

    componentDidMount() {
        const { id, interval } = this.props;
        this.context.dispatch(startTimer({ id, interval }));
    }

    componentWillUnmount() {
        this.context.dispatch(stopTimer(this.props.id));
    }
}
