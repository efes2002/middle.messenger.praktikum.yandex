type fun = (...args: unknown[]) => void;

export class EventBus {
    listeners: Record<string, Array<fun>>;

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: fun): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    off(event: string, callback: fun): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event: string, ...args: fun[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event].forEach(function(listener) {
            listener(...args);
        });
    }
}
