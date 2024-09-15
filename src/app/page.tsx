import Post from "@/components/Post";

export default async function Home() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h1 className="text-xl ">There is will </h1>
        <p className="text-4xl font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          excepturi, recusandae eos impedit harum fugiat nobis. Numquam,
          mollitia nobis tenetur id, porro deleniti voluptas dolores modi quos
          placeat, animi dignissimos.
        </p>
      </div>
      <Post />
    </section>
  );
}
