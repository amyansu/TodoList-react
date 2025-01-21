"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { ImCross } from "react-icons/im";

export default function Home() {
  const [todo, setTodo] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function addTodo(e: React.FormEvent) {
    e.preventDefault();
    setTodo([input, ...todo]);
    setInput("");
  }
  function deleteTodo(index: number) {
    const updatedTodo = todo.filter((_, i) => i != index);
    setTodo(updatedTodo);
    console.log(updatedTodo);
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div>
        <Card className="h-[500px] w-[500px]">
          {/* Header */}
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bold text-xl">
              To-Do List
              <FcTodoList />
            </CardTitle>
          </CardHeader>

          {/* Input */}
          <CardContent>
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
              <Button
                variant="destructive"
                className="rounded-r-full h-12 w-20"
              >
                Add
              </Button>
            </form>

            {/* Data */}
            <div>
              {todo.map((item, index) => (
                <div key={index} className="flex items-center mt-7 ml-4">
                  <Checkbox id="terms" className="rounded-full" />
                  <label
                    htmlFor="terms"
                    className="text-xl ml-2 p-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer line-through"
                  >
                    {item}
                  </label>
                  <div className="cursor-pointer p-3 ml-80">
                    <ImCross className=" text-sm" onClick={() => deleteTodo(index)} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
