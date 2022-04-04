export class Todo{
    done: boolean;
    name: string;

    constructor(text: string) {
        this.done = false;
        this.name = text;
    }
}