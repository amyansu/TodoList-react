import { useTodoStore } from "@/store/todoState";
import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

function TodoInput() {
  const { addTodo: add } = useTodoStore();
  const [input, setInput] = useState("");

  async function addTodo(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: input }),
    });
    const data = await res.json();
    add(data.todo);
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
