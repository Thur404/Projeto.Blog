import Image from "next/image";

export default function Home() {
  return (
    <main className="p-18">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-6 space-x-4">
        <a href="/Cadastro" className="bg-blue-500 text-white px-4 py-2 rounded">Cadastro</a>
        <a href="/Login" className="bg-green-500 text-white px-4 py-2 rounded">Login</a>
        <a href="/Posts" className="bg-purple-500 text-white px-4 py-2 rounded">Posts</a>
      </div>


    </main>
  );
}
