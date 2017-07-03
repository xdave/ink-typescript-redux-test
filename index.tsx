import { h, mount, Newline } from 'ink';
import { App } from './containers/App';
import { Counter } from "./components/Counter";
import reducer from './reducers';
import { configureStore } from './store';

const store = configureStore(reducer);

const unmount = mount((
    <App store={store}>
        <Counter id="one" interval={10} />
        <Newline />
        <Counter id="two" interval={20} />
        <Newline />
        <Counter id="three" interval={30} />
        <Newline />
        <Counter id="four" interval={40} />
    </App>
), process.stdout);

setTimeout(unmount, 2000);
