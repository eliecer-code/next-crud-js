import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  try {
    const getTask = await prisma.tasks.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(getTask);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const updatedTask = await prisma.tasks.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(updatedTask);
}

export async function DELETE(request, { params }) {
  try {
    const deleteTask = await prisma.tasks.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(deleteTask);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
