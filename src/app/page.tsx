import Image from "next/image";
import LoginForm from "../components/LoginForm";
import Link from "next/link";
import { db } from "../db";
import { deleteUser } from "../actions/script";

export default async function Home() {
  const users = await db.post.findMany();

  return (
    <section className="flex flex-col gap-6 p-6">
      <div className="flex justify-between ">
        <Link href={"/auth"} className="text-xl text-blue-400 ">
          Login
        </Link>
        <Link href={"/post/new"} className="text-xl text-blue-400 ">
          Create post
        </Link>
      </div>

      <div className="flex flex-col gap-4 p-4 rounded border border-gray-500 shadow-md">
        <h1 className="text-lg font-semibold ">Users List</h1>
        {users.map((user) => (
          <ul key={user.id}>
            <li className="flex justify-between p-2 hover:bg-purple-500 rounded">
              <span>{user.title}</span>
              <span>{user.content}</span>
              <Link
                href={`/post/${user.id}`}
                className="bg-blue-400 py-1 px-4 rounded text-md"
              >
                View
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
