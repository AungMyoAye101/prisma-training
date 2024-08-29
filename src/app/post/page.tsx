import React from "react";
import { db } from "../../db";
import Link from "next/link";

const PostList = async () => {
  const posts = await db.post.findMany();
  return (
    <section className="flex flex-col gap-4 mt-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex  justify-between p-4 items-center border border-gray-200 shadow-md rounded-md"
        >
          <span>{post.title}</span>
          <span>{post.content}</span>
          <Link
            href={`/post/${post.id}/edit`}
            className="px-4 py-2 rounded shadow "
          >
            Edit
          </Link>
        </div>
      ))}
    </section>
  );
};

export default PostList;
