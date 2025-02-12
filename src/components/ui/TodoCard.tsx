import { todos } from "@/app/page";
import { ImCross } from "react-icons/im";
import { Checkbox } from "./checkbox";
import { useTodoStore } from "@/store/todoState";
import { checkbox } from "@/app/action/checkbox";

function TodoCard({ item }: { item: todos }) {
  const { deleteTodo, handleCheckBox } = useTodoStore();

  async function Delete(id: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    deleteTodo(data.id);
  }

  async function CheckBox(id: number) {
    // const res = await fetch(`http://localhost:3000/api/todo/${id}?checkbox=${!item.checkbox}`, {
    //   method: "PUT",
    // });
    // const data = await res.json();
    const todoId = await checkbox(id, item.checkbox)
    handleCheckBox(todoId);
  }
  
  return (
    <div className="flex justify-between items-center mt-7  w-full">
      <div>
        <Checkbox
          className="rounded-full"
          onCheckedChange={() => CheckBox(item.id)}
          checked={item.checkbox}
        />
        <label
          htmlFor="terms"
          className={`text-xl ml-2 p-2 overflow-y-scroll ${
            item.checkbox ? "line-through" : ""
          }`}
        >
          {item.title}
        </label>
      </div>
      <div className="cursor-pointer p-3">
        <ImCross className=" text-sm" onClick={() => Delete(item.id)} />
      </div>
    </div>
  );
}

export default TodoCard;
