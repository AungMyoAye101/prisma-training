import { db } from "@/app/db";
import React from "react";

const PostList = async ({ params }: { params: { id: number } }) => {
  const post = await db.user.findFirst({
    where: { id: Number(params.id) },
  });
  return (
    <div>
      <div>{post?.email}</div>
      <div>{post?.name}</div>
    </div>
  );
};

export default PostList;
