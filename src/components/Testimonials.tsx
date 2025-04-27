import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

const testimonials = [
  {
    image: userOneImg,
    name: "Ujang Gunawan",
    title: "",
    text: `Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat
      pharetra facilisis interdum semper ultrices. Ipsum viverra vitae
      tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan
      nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada
      at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus
      vitae elit felis ultrices. Lobortis lorem mattis sit dolor
      cursus. Consequat vestibulum mus vitae vel.`,
  },
  {
    image: userTwoImg,
    name: "Dedik Dryfan",
    title: "",
    text: `Sed non sed ultricies ultricies iaculis turpis ut tincidunt
      orci. Ipsum id nullam urna et vehicula. Volutpat dignissim eget
      in velit. Integer mattis egestas neque amet. Turpis purus donec
      id velit sed morbi ultrices nulla praesent. Elit ipsum proin
      viverra sollicitudin vel arcu a.`,
  },
  {
    image: userThreeImg,
    name: "Putra Dadang Heriawan",
    title: "",
    text: `Lorem ipsum dolor sit amet consectetur. In ornare aliquam
      imperdiet dolor porta enim justo. Sed non sed ultricies
      ultricies iaculis turpis ut tincidunt orci. Ipsum id nullam urna
      et vehicula. Volutpat dignissim eget in velit. Integer mattis
      egestas neque amet. Turpis purus donec id velit sed morbi
      ultrices nulla praesent. Elit ipsum proin viverra sollicitudin
      vel arcu a.`,
  },
];

export const Testimonials = () => {
  return (
    <Container className="flex flex-wrap p-0 bg-[#E4E4E7] dark:bg-trueGray-900">
      <div className="relative w-full bg-cover bg-center bg-no-repeat pt-10 ">
        <div className="relative max-w-7xl mx-auto">
          <div>
            <h1 className="font-inter font-semibold text-[24px] leading-[54px] tracking-[-0.9px] mb-5">
              Ulasan dari Konsumen
            </h1>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${index === 0 ? "lg:col-span-2 xl:col-auto" : ""}`}
            >
              <div className="flex flex-col w-full bg-gray-100 px-14 rounded-2xl py-10 dark:bg-trueGray-800 h-full">
                <Avatar
                  image={testimonial.image}
                  name={testimonial.name}
                  title={testimonial.title}
                />
                <p className="text-[14px] text-[#71717A] leading-normal mt-4 flex-grow">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-8 mb-10">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full border border-[#CDCDCD] mx-1 ${
              index === 0 ? "bg-[#287C3E]" : "bg-transparent"
            }`}
          ></span>
        ))}
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-5 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}
