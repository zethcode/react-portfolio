"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Logo from "../assets/logo-black.png";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-white opacity-95 z-10 fixed inset-x-0">
      <header className="top-0 flex justify-between items-center max-w-7xl mx-auto">
          {/* Social Icons */}
          <motion.div
            initial={{
              x: -400,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1
            }}
            >
              <ul className="flex flex-col font-medium p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                {/* <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                </li> */}
                
                <li className="flex flex-col text-black md:flex-row md:mt-0 md:border-0">
                  <a href="/">
                    <Image className="h-auto w-10 cursor" src={Logo} alt="arckie zeth jadulco" />
                  </a>
                </li>
                <Link href="#about">
                  <button className="block h-10 p-2 bg-blue-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me</button>
                </Link>
                <li>
                  <a href="#" className="block p-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Experience</a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
              </ul>
          </motion.div>

          <motion.div
            initial={{
              x: 400,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{ duration: 1}}
            >
              <SocialIcon className="m-2" style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/arckie-jadulco" />
              <SocialIcon className="m-2" style={{ height: 40, width: 40 }} url="https://github.com/zethcode" />
              <SocialIcon className="m-2" style={{ height: 40, width: 40 }} url="https://dev.to/zethcode" />
              <SocialIcon 
                  className="cusor-pointer m-2"
                  network="email" 
                  style={{ height: 40, width: 40 }}
                  url="arckie.jadulco@gmail.com" />
          </motion.div>
      </header>
    </div>
  )
}