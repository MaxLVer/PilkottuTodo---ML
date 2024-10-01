import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
  const [state, setState] = useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);

  const handleDesc = (event) => {
    setState({ ...state, desc: event.target.value });
  };

  const handleDate = (event) => {
    setState({ ...state, date: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, { description: state.desc, date: state.date }]);
    setState({ desc: '', date: '' });
  };

  const handleDel = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <div>
        Description: <input type="text" onChange={handleDesc} value={state.desc} />
        Date: <input type="text" onChange={handleDate} value={state.date} />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoTable todos={todos} handleDel={handleDel} />
    </div>
  );
}

export default TodoList;