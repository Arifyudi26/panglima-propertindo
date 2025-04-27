import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const navigation = [
    "Panglima Propetindo",
    "Tentang Kami",
    "Project",
    "Pertanyaan Umum",
  ];

  const legal = [
    {
      icon: "",
      text: "Kontak",
    },
    {
      icon: FaWhatsapp,
      text: "081224090989 (chat)",
    },
    {
      icon: PhoneIcon,
      text: "(021) 2829-0901",
    },
    {
      icon: EnvelopeIcon,
      text: "Layanan@panglimapropertindo.com",
    },
  ];

  return (
    <div className="relative bg-[#282835]">
      <Container className="pb-0 mb-0">
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image src="/img/Logo.png" alt="N" width="150" height="50" />
              </Link>
            </div>
            <div className="max-w-md mt-4 text-[#FAFAFA] dark:text-gray-400">
              Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className={`w-full px-4 py-2 rounded-md
                  ${
                    index === 0
                      ? "text-white dark:text-gray-300 cursor-default"
                      : "text-white dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-trueGray-700"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-md
                  ${
                    index === 0
                      ? "text-white dark:text-gray-300 cursor-default"
                      : "text-white dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-trueGray-700"
                  }`}
                >
                  {item.icon && (
                    <item.icon
                      className={`w-5 h-5 ${
                        index === 0
                          ? "text-gray-400"
                          : "text-gray-400 group-hover:text-indigo-500"
                      }`}
                    />
                  )}
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-gray-600 dark:text-gray-400 bg-[#287C3E] px-6 py-4 flex items-center justify-between flex-wrap">
          <div className="text-white">
            ©Copyright Panglima Propertindo 2024. All Right Reserved
          </div>
          <div className="mt-2 lg:mt-0 flex gap-x-3">
            <Image
              src="/img/fb.png"
              alt="Facebook"
              className="h-6 w-6"
              width={24}
              height={24}
            />
            <Image
              src="/img/x.png"
              alt="X / Twitter"
              className="h-6 w-6"
              width={24}
              height={24}
            />
            <Image
              src="/img/ig.png"
              alt="Instagram"
              className="h-6 w-6"
              width={24}
              height={24}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
