"use client";

import { EditPost } from "@/app/actions/script";
import React from "react";

const PostEdit = ({ params }: { params: { id: number } }) => {
  return (
    <form
      action={""}
      className="flex flex-col gap-4 p-4 rounded shadow-md mt-10"
    >
      <h1>Post Edit Form</h1>
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

      <button type="submit" className="bg-purple-400 p-2 rounded shadow-md">
        Create
      </button>
    </form>
  );
};

export default PostEdit;
