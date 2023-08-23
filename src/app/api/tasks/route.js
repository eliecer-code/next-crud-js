import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const result = await prisma.tasks.findMany();
  return NextResponse.json(result);
}
export async function POST(request) {
  const { title, description } = await request.json();
  const newTask = await prisma.tasks.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newTask);
}
