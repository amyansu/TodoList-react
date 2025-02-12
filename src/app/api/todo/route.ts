import { db } from "@/db";
import { todosTable } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const todo = await db.select().from(todosTable).orderBy(desc(todosTable.id));
    return Response.json({ todo: todo });
};
export async function POST(request: NextRequest) {
    const body = await request.json();
    const todo = await db.insert(todosTable).values({
        title: body.title
    }).returning();
    return Response.json({ todo: todo })
};

export async function PUT(request: NextRequest) {
    const {id, checkbox} = await request.json();
    const todo = await db.update(todosTable).set({ checkbox: checkbox }).where(eq(todosTable.id, id)).returning({ id: todosTable.id });
    return Response.json({ id: todo[0].id })
};

export async function DELETE(request: NextRequest) {
    const {id} = await request.json();
    const todo = await db.delete(todosTable).where(eq(todosTable.id, id)).returning({ id: todosTable.id });
    return Response.json({ id: todo[0].id })
};

