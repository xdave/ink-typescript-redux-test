import { h, Component } from 'ink';
import { Store } from 'redux';

export class Provider extends Component<{ store: Store<any> }, {}> {
    getChildContext() {
        return this.props.store;
    }

    componentDidMount() {
        this.props.store.subscribe(() =>
            this.forceUpdate());
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
