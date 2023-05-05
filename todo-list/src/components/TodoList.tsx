import React, { useState, ChangeEvent, useCallback } from "react";

function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  }, []);

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodo("");
  }, [newTodo]);

  const removeTodo = useCallback((index: number) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input value={newTodo} onChange={handleChange} />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo: string, index: number) => (
          <li key={index}>
            {todo}{" "}
            <button
              style={{ marginLeft: 15 }}
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
