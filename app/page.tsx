import Image from "next/legacy/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">

      <div className="flex-grow flex flex-col items-center justify-center font-montserrat">
        <div className="my-5 text-center">
        <p className="text-2xl ">Hello, My name is <a href="https://www.instagram.com/_rayjoo/" className="font-bold">Ray Jonathan</a></p>
        <p className="text-xl text-gray-400">this is my</p>
        <p className="text-9xl font-sans">PORTOFOLIO</p>
        </div>
        <div className="flex justify-between">
          <a href="/About" className="p-2 cursor-pointer hover:underline hover:text-third-color font-montserrat">About</a>
          <a className="p-2 cursor-pointer hover:underline hover:text-third-color font-montserrat">Portofolio</a>
          <a className="p-2 cursor-pointer hover:underline hover:text-third-color font-montserrat">Social Media</a>
        </div>
      </div>
    </main>
  );
}
