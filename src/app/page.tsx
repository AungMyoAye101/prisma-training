import Image from "next/image";
import LoginForm from "./components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Link href={"/auth"}>Login</Link>
    </section>
  );
}
