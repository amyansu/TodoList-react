import { todos } from "@/app/page";
import { ImCross } from "react-icons/im";
import { Checkbox } from "./checkbox";
import { useTodoStore } from "@/store/todoState";

function TodoCard({ item }: { item: todos }) {
  const { deleteTodo, handleCheckBox } = useTodoStore();

  return (
    <div className="flex justify-between items-center mt-7  w-full">
      <div>
        <Checkbox
          className="rounded-full"
          onCheckedChange={() => handleCheckBox(item.id)}
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
        <ImCross className=" text-sm" onClick={() => deleteTodo(item.id)} />
      </div>
    </div>
  );
}

export default TodoCard;
