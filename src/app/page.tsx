"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import List2 from "@/components/ui/list2";
import Title from "@/components/ui/Title";
import TodoInput from "@/components/ui/TodoInput";
import { FcTodoList } from "react-icons/fc";

export interface todos {
  title: string;
  id: number;
  check: boolean;
}

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div>
        <Card className="h-[500px] w-[500px] overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bold text-xl">
              <Title name={"Todo List"} />
              <FcTodoList />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TodoInput />
            <List2 />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
