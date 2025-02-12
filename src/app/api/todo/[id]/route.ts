import { db } from "@/db";
import { todosTable } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { NextRequest } from "next/server";


export async function PUT(request: NextRequest, { params }:{params: Promise<{ id: number }>}) {
    const { id } = await params;
    const searchParams = request.nextUrl.searchParams
    const checkbox = searchParams.get('checkbox') === 'true';
    const todo = await db.update(todosTable).set({ checkbox: checkbox }).where(eq(todosTable.id, id)).returning({ id: todosTable.id });
    return Response.json({ id: todo[0].id })
};

export async function DELETE(request: NextRequest , { params }:{params: Promise<{ id: number }>}) {
    const { id } = await params;
    const todo = await db.delete(todosTable).where(eq(todosTable.id, id)).returning({ id: todosTable.id });
    return Response.json({ id: todo[0].id })
};

