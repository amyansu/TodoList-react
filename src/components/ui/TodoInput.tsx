import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { todos } from "@/app/page";

function TodoInput({setTodo}:{setTodo:Dispatch<SetStateAction<todos[]>>}) {
  const [input, setInput] = useState("");

  function addTodo(e: React.FormEvent) {
    e.preventDefault();
    setTodo((todo)=>[{ title: input, id: Math.random() * 1000, check: false }, ...todo,]);
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
