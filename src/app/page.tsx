import Image from "next/image";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import { db } from "./db";
import { deleteUser } from "./actions/script";

export default async function Home() {
  const users = await db.user.findMany();

  return (
    <section>
      <Link href={"/auth"}>Login</Link>
      <div>Users</div>
      {users.map((user) => (
        <ul key={user.id} className="max-w-2xl">
          <li className="flex justify-between items-center p-4 gap-2">
            <span>{user.name}</span>
            <span>{user.email}</span>
            <Link href={`/post/${user.id}`}>View</Link>
          </li>
        </ul>
      ))}
    </section>
  );
}
