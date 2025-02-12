import { useTodoStore } from "@/store/todoState";
import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

function TodoInput() {
  const add = useTodoStore((state) => state.addTodo);
  const [input, setInput] = useState("");

  async function addTodo(e: React.FormEvent) {
    e.preventDefault();
    if (input.length == 0) return;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: input }),
    });
    const data = await res.json();
    add(data.todo[0]);
    setInput("");
  }

  return (
    <form onSubmit={addTodo} className="flex items-center">
      <Input
        type="text"
        placeholder="Add your task"
        className="rounded-l-full h-12 w-full"
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
