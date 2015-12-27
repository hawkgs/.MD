export class NameList {
    names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper', "Pesho", "Sto", "d"];

    get(): string[] {
        return this.names;
    }
    add(value: string): void {
        this.names.push(value);
    }
}
