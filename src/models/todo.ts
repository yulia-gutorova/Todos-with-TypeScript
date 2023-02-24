class Todo {
    id: number;
    text: string;
    isStrikedThrough : boolean


    constructor(todoText: string, isStrikedThrough: boolean) {
        this.text = todoText
        this.id = Math.random()
        this.isStrikedThrough = isStrikedThrough
    }
}
export default Todo;