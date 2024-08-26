import { db } from "@/app/db";
import React from "react";

const PostList = async ({ params }: { params: { id: number } }) => {
  const post = await db.post.findFirst({
    where: { id: Number(params.id) },
  });
  return (
    <div className="flex  justify-between p-4 items-center border border-gray-200 shadow-md rounded-md mt-10">
      <div>{post?.title}</div>
      <div>{post?.content}</div>
      <button className="px-4 py-2 font-serif rounded shadow ">Edit</button>
    </div>
  );
};

export default PostList;
