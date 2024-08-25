"use server";

import { redirect } from "next/navigation";
import { db } from "../db";
import { revalidatePath } from "next/cache";

export const createUser = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const user = await db.user.create({
    data: {
      name,
      email,
    },
  });
  console.log(user);
  redirect("/");
};

// delete users

export const deleteUser = async (id: number) => {
  console.log(id);
  await db.user.delete({
    where: { id },
  });
  redirect("/");
};

// Post create

export const postCreate = async (formData: FormData) => {
  const user = await db.user.findFirst({
    where: {
      email: "aye@gmail.com",
    },
  });

  await db.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      author: {
        connect: {
          email: user?.email,
        },
      },
    },
  });
  revalidatePath("/post");
};
