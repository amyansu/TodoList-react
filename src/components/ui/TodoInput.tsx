import { useTodoStore } from "@/store/todoState";
import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

function TodoInput() {
  const { addTodo: add } = useTodoStore();
  const [input, setInput] = useState("");

  function addTodo(e: React.FormEvent) {
    e.preventDefault();
    add({ title: input, id: Math.random() * 1000, check: false });
    setInput("");
  }

  return (
    <form onSubmit={addTodo} className="flex items-center">
      <Input
        type="text"
        placeholder="Add your task"
        className="rounded-l-full h-12 w-96"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button variant="destructive" className="rounded-r-full h-12 w-20">
        Add
      </Button>
    </form>
  );
}

export default TodoInput;
