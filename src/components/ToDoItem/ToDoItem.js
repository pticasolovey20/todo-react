import Edit from '../../img/edit.svg';
import Delete from '../../img/delete.svg';
import Save from '../../img/save.svg';

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

            {!todo.completed && (
                <div className="edit-submit-wrapper">
                    {todoEditing === todo.id ? (
                        <div className="save" onClick={e => editTodo(todo.id)}>
                            <img className="image-save" src={Save} alt="save"></img>
                        </div>
                    ) : (
                        <div className="edit" onClick={() => setTodoEditing(todo.id)}>
                            <img className="image-edit" src={Edit} alt="edit"></img>
                        </div>
                    )}
                </div>
            )}

            <div
                className={todo.completed === true ? 'delete-completed' : 'delete'}
                onClick={() => onRemove(todo.id)}
            >
                <img className="image-delete" src={Delete} alt="delete"></img>
            </div>
        </div>
    );
};

export default ToDoItem;
