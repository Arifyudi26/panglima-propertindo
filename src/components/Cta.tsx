import React from "react";
import heroImg from "../../public/img/Frame.png";
import { Container } from "@/components/Container";
import { ShoppingCartIcon } from "lucide-react";

export const Cta = () => {
  return (
    <Container>
      <div
        className="flex flex-col items-center justify-center w-full max-w-7xl gap-5 mx-auto text-white bg-[#FA9500] px-7 py-12 lg:px-12 lg:py-20 rounded-xl text-center"
        style={{
          backgroundImage: `url(${heroImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "contain",
        }}
      >
        <h2 className="text-[30px] font-medium lg:text-3xl">
          Booking Sekarang!
        </h2>
        <p className="mt-2 text-[16px] text-white text-opacity-90 lg:text-xl">
          Tunggu apalagi, booking sekarang property syariah impian Anda
        </p>
        <a
          href="https://github.com/web3templates"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 py-3 mt-6 text-lg font-medium text-white bg-[#287C3E] rounded-md px-5"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          Daftar & Beli NUB
        </a>
      </div>
    </Container>
  );
};
