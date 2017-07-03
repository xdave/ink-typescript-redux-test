declare module 'ink' {
    import { createElement, Component as ReactComponent } from 'react';

    // TODO: more styles
    export interface Styles {
        green: boolean;
    }

    export class Component<P, S> extends ReactComponent<P, S> {}
    export class StringComponent extends Component<{}, {}> { }
    export class Newline extends Component<{}, {}> {}
    export class Indent extends Component<{ size: number; indent: string }, {}> {}
    export class Group extends Component<{}, {}> {}
    export class Text extends Component<Partial<Styles>, {}> {}

    // TODO: diff
    export const h: typeof createElement;
    export function renderToString(tree: JSX.Element): string;
    export function render(tree: JSX.Element, prevTree?: JSX.Element): JSX.Element;
    export function mount(tree: JSX.Element, stream: NodeJS.WritableStream): () => void;
}
