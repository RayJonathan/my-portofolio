import Image from "next/legacy/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
    
        <div className="flex-grow flex flex-col items-center justify-center">
        <p className="text-2xl">Hello, My name is <a href="https://www.instagram.com/_rayjoo/" className="font-bold">Ray Jonathan</a></p>
        <p className="text-2xl">this is my</p>
        <p className="text-9xl">PORTOFOLIO</p>
      </div>
    </main>
  );
}
