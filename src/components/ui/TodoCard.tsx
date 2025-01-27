import { todos } from "@/app/page";
import { Dispatch, SetStateAction } from "react";
import { ImCross } from 'react-icons/im';
import { Checkbox } from './checkbox';

function TodoCard({todo, setTodo, item}:{todo:todos[],setTodo:Dispatch<SetStateAction<todos[]>>,item: todos}) {
    const deleteTodo = (id: number) => {
        const updatedTodo = todo.filter((item) => item.id !== id);
        setTodo(updatedTodo);
      };
    
      const handleCheckbox = (id: number) => {
        const newArray = todo.map((item) => {
          return item.id !== id ? item : { ...item, check: !item.check };
        });
        setTodo(newArray);
      };
  return (
    <div
    className="flex justify-between items-center mt-7  w-full"
  >
    <div>
      <Checkbox
        className="rounded-full"
        onCheckedChange={() => handleCheckbox(item.id)}
      />
      <label
        htmlFor="terms"
        className={`text-xl ml-2 p-2 overflow-y-scroll ${
          item.check && "line-through"
        }`}
      >
        {item.title}
      </label>
    </div>
    <div className="cursor-pointer p-3">
      <ImCross
        className=" text-sm"
        onClick={() => deleteTodo(item.id)}
      />
    </div>
  </div>
  )
}

export default TodoCard