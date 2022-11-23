import React, { useEffect, useState } from 'react';
import ToDoItem from './components/ToDoItem/ToDoItem';
import ToDoForm from './components/ToDoForm/ToDoForm';

const App = () => {
    const initialTodos = localStorage.todos ? JSON.parse(localStorage.todos) : [];
    const [todos, setTodos] = useState(initialTodos);
    const [input, setInput] = useState('');
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
    }, [todos]);

    const addTask = text => {
        if (text) {
            const newToDoItem = {
                id: (Math.random() * 100).toFixed(2),
                text,
                completed: false,
            };

            setTodos([...todos, newToDoItem]);
            setInput('');
        }
    };

    const handleToggle = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    const editTodo = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.text = editingText;
            }

            return todo;
        });

        setTodos(updatedTodos);
        setTodoEditing(null);
        setEditingText('');
    };

    const removeTask = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const finishedTasks = todos.filter(todo => todo.completed === false);
    const notFinishedTasks = todos.filter(todo => todo.completed === true);
    const finalyTasks = [...finishedTasks, ...notFinishedTasks];

    const cleanTask = () => {
        setTodos([]);
    };

    return (
        <div className="App">
            <div className="wrapper">
                <div className="content">
                    <h1>TO DO LIST</h1>
                    <ToDoForm
                        input={input}
                        setInput={setInput}
                        addTask={addTask}
                        cleanTask={cleanTask}
                    />
                    {finalyTasks &&
                        finalyTasks.map(todo => {
                            return (
                                <ToDoItem
                                    onRemove={removeTask}
                                    onToggle={() => handleToggle(todo.id)}
                                    todo={todo}
                                    key={todo.id}
                                    todoEditing={todoEditing}
                                    setEditingText={setEditingText}
                                    setTodoEditing={setTodoEditing}
                                    editTodo={editTodo}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default App;
