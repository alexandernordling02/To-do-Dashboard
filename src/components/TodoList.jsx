function TodoList({ todos }) {

    return (
        <>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList