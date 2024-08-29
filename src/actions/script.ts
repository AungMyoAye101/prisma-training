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
  await db.user.delete({
    where: { id },
  });
  revalidatePath("/");
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
      image: formData.get("image") as string,
      author: {
        connect: {
          email: user?.email,
        },
      },
    },
  });
  revalidatePath("/post");
};

// user detail
export const UserInfo = async ({ params }: { params: { id: number } }) => {
  const user = await db.user.findFirst({
    where: {
      id: params.id,
    },
    include: {
      posts: true,
    },
  });
};

// post edit page

export const EditPost = async (formData: FormData, id: number) => {
  await db.post.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
};

export const deletePost = async (id: number) => {
  await db.post.delete({
    where: { id },
  });
  revalidatePath("/");
  redirect("/");
};
