const ToDoForm = ({ addTask, input, setInput, cleanTask }) => {
    const handleSubmit = e => {
        e.preventDefault();
        addTask(input);
    };

    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input
                    className="user-input"
                    value={input}
                    type="text"
                    onChange={e => setInput(e.currentTarget.value)}
                    placeholder="what's for today"
                />
            </div>
            <div className="button-wrapper">
                <button>Add</button>
                <button onClick={cleanTask}>Clean All</button>
            </div>
        </form>
    );
};

export default ToDoForm;
