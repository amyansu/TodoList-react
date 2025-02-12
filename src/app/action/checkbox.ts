"use server"
import { db } from "@/db";
import { todosTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function checkbox(id:number, checkbox:boolean) {
        const todo = await db.update(todosTable).set({ checkbox: !checkbox }).where(eq(todosTable.id, id)).returning();
        return todo[0].id ;
}