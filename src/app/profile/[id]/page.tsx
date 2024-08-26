import { db } from "@/app/db";
import React from "react";

const ProfilePage = async ({ params }: { params: { id: number } }) => {
  const user = await db.user.findFirst({
    where: {
      id: Number(params.id),
    },
    include: {
      posts: true,
    },
  });
  return (
    <div>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div>
        {user?.posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
