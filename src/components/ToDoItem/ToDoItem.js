const ToDoItem = ({
    todo,
    onRemove,
    onToggle,
    todoEditing,
    setEditingText,
    setTodoEditing,
    editTodo,
}) => {
    return (
        <div className={todo.completed === true ? 'todo-item-completed' : 'todo-item'}>
            <div
                className={todo.completed === true ? 'circle-completed' : 'circle'}
                onClick={() => onToggle(todo.id)}
            >
                {''}
            </div>

            {todoEditing === todo.id ? (
                <input
                    className="text"
                    type="text"
                    onChange={e => setEditingText(e.target.value)}
                />
            ) : (
                <p className="text">{todo.text}</p>
            )}

            {todo.completed === true ? null : (
                <div className="edit-submit-wrapper">
                    {todoEditing === todo.id ? (
                        <div className="submit" onClick={e => editTodo(todo.id)}>
                            submit
                        </div>
                    ) : (
                        <div className="edit" onClick={() => setTodoEditing(todo.id)}>
                            edit
                        </div>
                    )}
                </div>
            )}

            <div
                className={todo.completed === true ? 'delete-completed' : 'delete'}
                onClick={() => onRemove(todo.id)}
            >
                X
            </div>
        </div>
    );
};

export default ToDoItem;
