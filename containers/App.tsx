import { h, Component } from 'ink';
import { Provider } from './ink-redux';
import { Store } from 'redux';

export class App extends Component<{ store: Store<any> }, {}> {
    render() {
        return (
            <Provider store={this.props.store}>
                {this.props.children}
            </Provider>
        );
    }
}
