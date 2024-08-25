import Image from "next/image";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import { db } from "./db";

export default async function Home() {
  const users = await db.user.findMany();

  return (
    <section>
      <Link href={"/auth"}>Login</Link>
      <div>Users</div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </section>
  );
}
