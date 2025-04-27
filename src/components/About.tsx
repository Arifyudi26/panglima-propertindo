import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const data = [
  { title: "6+", description: "Project Syariah" },
  { title: "200+", description: "Telah STR" },
  { title: "200+", description: "Telah STR" },
  { title: "200+", description: "Telah STR" },
  { title: "200+", description: "Telah STR" },
];

function About() {
  return (
    <Container className="flex flex-wrap p-0">
      <div className="relative w-full bg-cover bg-center bg-no-repeat pt-10 ">
        <div className="relative max-w-7xl mx-auto">
          <div>
            <h1 className="font-inter font-semibold text-[30px] leading-[54px] tracking-[-0.9px]">
              Tentang Kami
            </h1>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pl-0">
        <Image src="/img/Logo.png" width="284" alt="N" height="127" />
        <span className="text-start text-sm md:text-base w-full md:w-[80%] px-0 md:px-4">
          Sejak 1880, Panglima Propertindo menjadi Developer Syariah yang
          berkomitmen menyediakan Properti Halal Berkualitas bagi Ummat dengan
          Lingkungan yang Baik.
        </span>
      </div>
      <div
        className="relative max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pl-0 py-20"
        style={{
          backgroundImage: 'url("/img/about.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      >
        <div
          className="absolute inset-0 bg-[#2123228A]"
          style={{
            zIndex: 1,
          }}
        ></div>
        <div className="flex flex-wrap gap-4 justify-center w-full px-4 relative z-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(20%-1rem)] md:w-[calc(20%-1rem)] lg:w-[calc(20%-1rem)]"
            >
              <Card className="bg-[#287C3E] text-white w-full max-w-[200px] mx-auto border-white">
                <CardHeader className="text-center text-[30px]">
                  {item.title}
                </CardHeader>
                <CardContent className="text-center text-[16px]">
                  {item.description}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-5">
        <Card className="w-full max-w-[84%] mx-auto border-[#E4E4E7]">
          <CardHeader className="text-[20px ]">Visi</CardHeader>
          <CardContent className="text-[16px]">
            Menjadi Developer Property Syariah Kelas Dunia, pengembang
            lingkungan pemukiman yang baik yang Menenangkan Hati.
          </CardContent>
        </Card>
        <Card className="w-full max-w-[84%] mx-auto border-[#E4E4E7] mt-5">
          <CardHeader className="text-[20px]">Misi</CardHeader>
          <CardContent className="text-[16px]">
            <ul className="list-disc pl-5">
              <li>
                Mengembangkan proyek Property yang memberi value terbaik
                & ketenangan hati.
              </li>
              <li>
                Membentuk lingkungan yang berperan nyata dalam
                pembentukan Peradaban Mulia.
              </li>
              <li>
                Bertumbuh dengan Cepat dan berkesinambungan sehingga dapat
                mensejahterakan para pemangku kepentingan
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

export default About;
