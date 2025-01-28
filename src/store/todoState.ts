import { todos } from "@/app/page";
import { create } from "zustand";


interface TodoState {
    todos: todos[];
    addTodo: (newTodo: todos) => void;
    setTodo: (newTodo: todos[]) => void;
    deleteTodo: (id: number) => void;
    handleCheckBox: (id: number) => void;

}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: (newTodo: todos) => set((state) => ({ todos: [newTodo, ...state.todos] })),
    setTodo: (newTodo: todos[]) => set({ todos: newTodo }),
    deleteTodo: (id: number) => set((state) => ({ todos: state.todos.filter((item) => item.id !== id) })),
    handleCheckBox: (id: number) => set((state) => ({
        todos: state.todos.map((item) => {
            return item.id !== id ? item : { ...item, check: !item.check };
        })
    }))
}));