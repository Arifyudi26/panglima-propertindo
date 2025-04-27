import React from "react";
import { Container } from "./Container";
import Img from "../../public/img/bgTest.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

const cardData = [
  {
    icon: "/img/money-tree-1.png",
    description: "Tanpa Riba",
    content:
      "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
  },
  {
    icon: "/img/money-tree-2.png",
    description: "Tanpa KPR Bank",
    content:
      "Tanpa melibatkan pembiayaan bank konvensional, menghindari riba, gharar (ketidakpastian), dan maysir (spekulasi)",
  },
  {
    icon: "/img/money-tree-3.png",
    description: "Tanpa Sita",
    content:
      "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
  },
  {
    icon: "/img/money-tree-4.png",
    description: "Tanpa Denda",
    content:
      "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
  },
  {
    icon: "/img/money-tree-5.png",
    description: "Tanpa Penalti",
    content:
      "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
  },
  {
    icon: "/img/money-tree-6.png",
    description: "Tanpa Akad Bermasalah",
    content:
      "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
  },
];

function Section() {
  return (
    <Container className="flex flex-wrap pt-0 pb-0">
      <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat text-center pb-5"
        style={{
          backgroundImage: `url(${Img.src})`,
          backgroundColor: "#282835",
        }}
      >
        <div className="relative z-10 w-full px-4 flex flex-col md:flex-row justify-between items-start md:items-center mt-12 gap-6">
          <h1 className="font-inter font-semibold text-[24px] leading-[34px] tracking-[-0.5px] text-white w-full md:w-[60%] text-start pl-0 md:pl-[8%] md:text-[36px] md:leading-[54px]">
            Kenapa Harus
            <br />
            <span className="text-[#FA9500]">Panglima Propertindo?</span>
          </h1>
          <span className="text-start text-white text-sm md:text-base w-full md:w-[80%] px-0 md:px-4">
            Dengan komitmen penuh pada prinsip-prinsip syariah, kami
            menghadirkan properti berkualitas tinggi yang memberikan keamanan
            dan keberkahan bagi Anda dan keluarga.
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-5 text-start">
          {cardData.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card className="bg-[#287C3E] border-none text-white min-h-[180px] flex flex-col p-0">
                <div className="flex flex-col flex-1 justify-start gap-2 p-3">
                  <CardHeader className="flex items-center gap-2 p-0">
                    <div className="relative bg-white rounded-md w-fit p-2">
                      <Image
                        src={card.icon}
                        alt="icon"
                        width={60}
                        height={60}
                        style={{ width: "auto", height: "auto" }}
                        className="object-contain"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow text-red-500 text-sm font-bold leading-none">
                        ×
                      </div>
                    </div>

                    <CardDescription className="text-sm opacity-80">
                      {card.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p>{card.content}</p>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Section;
