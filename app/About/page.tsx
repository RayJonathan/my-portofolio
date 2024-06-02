import Image from "next/image";

export default function About() {
  return (
    <main className="h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-evenly">
        <a href="/" className="text-sm md:text-base lg:text-lg hover:underline">Home</a>
        <a href="/projects" className="text-sm md:text-base lg:text-lg hover:underline">Projects</a>
        <a href="/contacts" className="text-sm md:text-base lg:text-lg hover:underline">Contacts</a>
      </header>
      <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">About Me</h1>
        <div className="relative w-full h-1/2">
        <Image
          src="/rayjo.jpg"
          alt="Your Profile Picture"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          Hello! My name is Ray Jonathan. I am a web developer with a passion for creating beautiful and functional websites and applications. 
          I have experience working with various technologies including JavaScript, React, Next.js, and Tailwind CSS.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          In my free time, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the community. 
          When I'm not coding, you can find me hiking, reading, or spending time with friends and family.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Feel free to connect with me on <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">LinkedIn</a> or check out my projects on <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">GitHub</a>.
        </p>
      </div>
    </main>
  );
}
