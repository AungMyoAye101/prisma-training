"use client";

import React from "react";
import { createUser } from "../actions/script";

const LoginForm = () => {
  return (
    <form
      action={createUser}
      className="flex flex-col p-4 gap-6 bg-slate-200 rounded shadow-md max-w-xl mt-10 mx-auto "
    >
      <h1 className="text-xl font-bold text-center">Login Form</h1>
      <input
        type="text"
        name="name"
        className="rounded p-2 focus:outline-none"
        placeholder="Enter your name"
      />
      <input
        type="email"
        name="email"
        className="rounded p-2 focus:outline-none"
        placeholder="john@gmail.con"
      />
      <button type="submit" className="bg-blue-400 rounded p-2">
        SignIn
      </button>
    </form>
  );
};

export default LoginForm;
