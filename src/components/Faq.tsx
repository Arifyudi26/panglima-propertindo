"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const faqdata = [
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Yes",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: `Lorem ipsum dolor sit amet consectetur. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam. Tincidunt id neque morbi risus ac dictumst rhoncus. Ornare euismod risus aliquam volutpat dictum consectetur accumsan praesent neque. Dolor habitasse mi eget etiam purus nisl nullam.`,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Yes",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "No",
  },
];

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="relative w-full bg-cover bg-center bg-no-repeat pt-10 ">
        <div className="relative max-w-7xl mx-auto">
          <div>
            <h1 className="font-inter font-semibold text-[24px] leading-[54px] tracking-[-0.9px] mb-5">
              Pertanyaan Umum
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={index} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <span className="text-xl font-bold">
                      {open ? "-" : "+"}
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};
