export class NameList {
  names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper2'];
  pesho = "sdfsd";

  get(): string[] {
    return this.names;
  }
  add(value: string): void {
    this.names.push(value);
  }
}
