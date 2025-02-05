import { todos } from "@/app/page";
import { ImCross } from "react-icons/im";
import { Checkbox } from "./checkbox";
import { useTodoStore } from "@/store/todoState";

function TodoCard({ item }: { item: todos }) {
  const { deleteTodo, handleCheckBox } = useTodoStore();

  async function Delete(id: string) {
    const res = await fetch(`http://localhost:3001/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    deleteTodo(data.id);
  }

  async function CheckBox(id: string) {
    const res = await fetch(`http://localhost:3001/checkbox/${id}`, {
      method: "PUT",
    });
    const data = await res.json();
    handleCheckBox(data.id);
  }
console.log(item.checkbox)
  return (
    <div className="flex justify-between items-center mt-7  w-full">
      <div>
        <Checkbox
          className="rounded-full"
          onCheckedChange={() => CheckBox(item._id)}
          checked={item.checkbox}
        />
        <label
          htmlFor="terms"
          className={`text-xl ml-2 p-2 overflow-y-scroll ${
            item.checkbox ?"line-through":""
          }`}
        >
          {item.title}
        </label>
      </div>
      <div className="cursor-pointer p-3">
        <ImCross className=" text-sm" onClick={() => Delete(item._id)} />
      </div>
    </div>
  );
}

export default TodoCard;
