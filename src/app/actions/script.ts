"use server";

import { redirect } from "next/navigation";
import { db } from "../db";

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
