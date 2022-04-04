import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { PrintTodo } from "./PrintTodo";


export function Todos() {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    function toggleTodo(todoToggle: Todo) {

        todoToggle.done = !todoToggle.done;

        setTodoList([...todoList]);
    }

    function saveTodo(newTodo: Todo) {

        setTodoList([...todoList, newTodo])
    }

    let todosHtml = todoList.map((todo: Todo, i: number) => {
        return (<PrintTodo key={i} todo={todo} toggleTodo={toggleTodo}></PrintTodo>)
    });

    return (
        <>
            <h1>Todos</h1>
            <AddTodo addTodo={saveTodo}></AddTodo>
            {todosHtml}
        </>
    )
}