import { todos } from "@/app/page";
import { create } from "zustand";


interface TodoState {
    todos: todos[];
    addTodo: (newTodo: todos) => void;
    setTodo: (newTodo: todos[]) => void;
    deleteTodo: (id: string) => void;
    handleCheckBox: (id: string) => void;

}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: (newTodo: todos) => set((state) => ({ todos: [newTodo, ...state.todos] })),
    setTodo: (newTodo: todos[]) => set({ todos: newTodo }),
    deleteTodo: (id: string) => set((state) => ({ todos: state.todos.filter((item) => item._id !== id) })),
    handleCheckBox: (id: string) => set((state) => ({
        todos: state.todos.map((item) => {
            return item._id !== id ? item : { ...item, check: !item.check };
        })
    }))
}));