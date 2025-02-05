import React, { useEffect } from "react";
import TodoCard from "./TodoCard";
import { useTodoStore } from "@/store/todoState";

export default function List() {
  const { todos, setTodo } = useTodoStore();

  useEffect(() => {
    fetch("http://localhost:3001/todos").then((response) => {
      response.json().then((data) => {
        setTodo(data.todo);
      });
    });
  }, []);

  return (
    <div className="mt-5 max-h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {todos.map((item) => (
        <TodoCard key={item._id} item={item} />
      ))}
    </div>
  );
}
