"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar()
{
    const router = useRouter();

    const onClickUrl=(url:string)=>{
        router.push(url)
    }
    return(
        <header className="bg-gray-800 text-white p-4 w-full flex justify-between items-center">
        <div className="flex items-center">
        <div className="flex items-center">
          <Link href="/">
            
              <Image
                src="/rayjoLogoWhite.png"
                alt="Logo"
                width={40}
                height={40}
                className="mr-2 cursor-pointer"
              />
          </Link>
        </div>
          <span className="text-lg font-bold">Ray Jonathan</span>
        </div>
        <nav className="hidden md:flex">
          <Link href="/" as="/">
            <span className="text-lg text-white hover:underline mr-4 cursor-pointer">
              Hello
            </span>
          </Link>
          <Link href="/about" as="/About">
            <span className="text-lg text-white hover:underline mr-4 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/portfolio" as="/portfolio">
            <span className="text-lg text-white hover:underline mr-4 cursor-pointer">
              Portfolio
            </span>
          </Link>
          <Link href="/social" as="/social">
            <span className="text-lg text-white hover:underline cursor-pointer">
              Social Media
            </span>
          </Link>

        </nav>

        <a
          href="https://www.instagram.com/_rayjoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Let's talk
        </a>
      </header>
              
            )
        }
        