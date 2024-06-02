import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-evenly">
        <a href="/About">About Me</a>
        <a>Projects</a>
        <a>Contacts</a>
      </header>
      <div className="flex-grow flex flex-col items-center justify-center">
        <p className="text-2xl">Hello, My name is <a href="https://www.instagram.com/_rayjoo/" className="font-bold">Ray Jonathan</a></p>
        <p className="text-2xl">this is my</p>
        <p className="text-9xl">PORTOFOLIO</p>
      </div>
    </main>
  );
}
