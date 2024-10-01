function TodoTable({ todos, handleDel }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.description}</td>
              <td><button onClick={() => handleDel(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default TodoTable;