import { postCreate } from "@/actions/script";
import React from "react";

const PostCreate = () => {
  return (
    <form
      action={postCreate}
      className="flex flex-col gap-4 border border-gray-200 rounded shadow max-w-2xl p-4 mt-6"
    >
      <h1>Post create</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        className="p-2 border border-gray-100 rounded shadow"
      />
      <input
        type="text"
        placeholder="content"
        name="content"
        className="p-2 border border-gray-100 rounded shadow"
      />
      <input type="file" placeholder="Upload a image" />
      <button type="submit" className="bg-purple-400 p-2 rounded shadow-md">
        Create
      </button>
    </form>
  );
};

export default PostCreate;
