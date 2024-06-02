import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <main className="h-screen flex flex-col items-center">


      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl mt-8">
        <div className="w-full mr-4 md:w-1/3">
          <Image
            src="/rayjo_potrait.png"
            alt="Your Profile Picture"
            width={300}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-sm">Let me introduce myself</p>
          <h1 className="text-5xl font-bold mb-9 text-second-color">
            About Me
          </h1>
          <p className="font-bold">A story of hardwork and perseverance</p>
          <p className="text-lg mb-4 text-gray-300">
            Hello, my name is ray jonathan. i have a passion for design
            especially in web design. i also really like to develop websites
            whether it's front-end or back-end. I have a very high curiosity so
            that I always explore new things, especially in the field of
            informatics and the latest technology.
          </p>
          <div className="">
            <p>
              <strong>Name:</strong> Ray Jonathan
            </p>
            <p>
              <strong>Whatsapp:</strong> (62) 89530945521
            </p>
            <p>
              <strong>Email:</strong> rayjonathan5415@gmail.com
            </p>
            <p>
              <strong>Skills:</strong>
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Image
                  src="/icon/php.png"
                  alt="PHP Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2">PHP</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icon/python.png"
                  alt="Python Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2">Python</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icon/mysql.png"
                  alt="MySQL Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2">MySQL</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icon/typescript.png"
                  alt="TypeScript Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2">TypeScript</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icon/prisma.png"
                  alt="Prisma Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2">Prisma</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icon/css.png"
                  alt="CSS Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2">CSS</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icon/nextjs.png"
                  alt="Next.js Logo"
                  className="bg-white"
                  width={24}
                  height={24}
                />
                <span className="ml-2">Next.js</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icon/tailwind.png"
                  alt="Tailwind CSS Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2">Tailwind CSS</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icon/android_studio.png"
                  alt="Android Studio Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2">Android Studio</span>
              </div>
            </div>
          </div>
          <a
            href="/RayJonathanCV.pdf"
            download
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-8"
          >
            Download CV
          </a>
        </div>
      </div>
    </main>
  );
}
