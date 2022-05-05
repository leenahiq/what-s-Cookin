// s
const Input = ({
  handleSubmit,
  setTodo,
  todos,
  todo,
  toggleComplete,
  todoEditing,
  setEditingText,
  submitEdits,
  setTodoEditing,
  deleteTodo,
}) => {
  return (
    <div>
      <div className="wrap">
        <div id="todo-list">
          <div>
            {/* heading */}
            <h1 className="title">Shopping List</h1>
            {/* ADD task input field */}
            <form onSubmit={handleSubmit} className="addForm">
              <input
                type="text"
                placeholder="ADD YOUR item"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
              />

              <button type="submit" className="addToListButton">Add To List</button>
            </form>
          </div>

          {todos.map((todo) => (
            <div className="listWrapper">
            <div key={todo.id} className="todo">
              <div className="todo-text">
                <input
                className="checkbox"
                  type="checkbox"
                  id="completed"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                {todo.id === todoEditing ? (
                  <input
                  className="editBox"
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                ) : (
                  <div className="listText">{todo.text}</div>
                )}
              </div>
              {/* edit button */}
              <div className="todo-actions">
                {todo.id === todoEditing ? (
                  <button onClick={() => submitEdits(todo.id)} className= "submitEditButton">
                    Submit Edits
                  </button>
                ) : (
                  <button onClick={() => setTodoEditing(todo.id)} className="editButton">Edit</button>
                )}

                <button onClick={() => deleteTodo(todo.id)} className="deleteButton">Delete</button>
              </div>
            </div>
            </div>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default Input;
