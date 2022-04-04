import { ChangeEvent, useState } from "react";
import { Todo } from "../models/Todo";


interface IAddTodo {
    addTodo(todo: Todo): void;
}

export function AddTodo(props: IAddTodo) {

    const [userInput, setUserInput] = useState('');

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setUserInput(e.target.value);
    }

    function handleClick() {
        let newTodo = new Todo(userInput);
        props.addTodo(newTodo)
        setUserInput('')
    }

    return (
        <div>
            <input type="text" value={userInput} onChange={handleChange}></input>
            <button onClick={handleClick}>Lägg till</button>
        </div>
    )
}