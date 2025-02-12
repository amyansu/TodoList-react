import React, { useEffect } from "react";
import TodoCard from "./TodoCard";
import { useTodoStore } from "@/store/todoState";

export default function List() {
  const { todos, setTodo } = useTodoStore();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetch("http://localhost:3000/api/todo").then((response) => {
      response.json().then((data) => {
        setTodo(data.todo);
      });
    });
  }, []);

  return (
    <div className="mt-5 max-h-80 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {todos.map((item) => (
        <TodoCard key={item.id} item={item} />
      ))}
    </div>
  );
}
