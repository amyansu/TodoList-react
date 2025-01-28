import React from "react";
import TodoCard from "./TodoCard";
import { useTodoStore } from "@/store/todoState";

export default function List2() {
  const { todos } = useTodoStore();

  return (
    <div className="mt-5 max-h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {todos.map((item) => (
        <TodoCard key={item.id} item={item} />
      ))}
    </div>
  );
}
