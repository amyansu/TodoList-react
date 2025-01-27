"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/ui/Title";
import TodoCard from "@/components/ui/TodoCard";
import TodoInput from "@/components/ui/TodoInput";
import { useState } from "react";
import { FcTodoList } from "react-icons/fc";

export interface todos {
  title: string;
  id: number;
  check: boolean;
}

export default function Home() {
  const [todo, setTodo] = useState<todos[]>([]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div>
        <Card className="h-[500px] w-[500px] overflow-hidden">
          {/* Header */}
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bold text-xl">
              <Title name={"bala list"} />
              <FcTodoList />
            </CardTitle>
          </CardHeader>
          {/* Input */}
          <CardContent>
            <TodoInput setTodo={setTodo} />
            {/* Data */}
            <div className="mt-5 max-h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {todo.map((item) => (
                <TodoCard key={item.id} item={item} todo={todo} setTodo={setTodo} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
