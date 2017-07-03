export interface Timer {
    timer: NodeJS.Timer;
    i: number;
}

export interface State {
    counter: {
        timers: { [id: string]: Timer }
    };
}
