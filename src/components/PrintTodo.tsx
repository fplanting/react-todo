import { Todo } from "../models/Todo";

interface IPrintTodo {
    todo: Todo;
    toggleTodo(todo: Todo): void;
}

export function PrintTodo(props: IPrintTodo) {

    function handleClick() {
        props.toggleTodo(props.todo)
    }

    return (
        <>
            {props.todo.done && <div onClick={handleClick}>{props.todo.name}</div>}
            {!props.todo.done && <div onClick={handleClick}>{props.todo.name}</div>}
        </>
    )

}