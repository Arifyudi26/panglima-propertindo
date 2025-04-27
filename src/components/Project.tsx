import React from "react";
import { Container } from "./Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const dataProject = [
  {
    id: 1,
    title: "Perumahan Halal Elfida Mulia",
    address: "Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur",
    badges: ["Ahsan", "Mumtaz", "Sultan", "+6"],
    image: "/img/project-1.png",
  },
  {
    id: 2,
    title: "Salima Memorial Park - Sambutan",
    address: "Jl. Sultan Sulaiman Sambutan, Samarinda, Kalimantan Timur",
    badges: ["Single", "Couple", "Family", "+1"],
    image: "/img/project-2.png",
  },
  {
    id: 3,
    title: "Pesona Elfida",
    address: "Jl. Gn. Lingai Sungai Pinang, Samarinda, Kalimantan Timur",
    badges: ["Al Kalam", "Al Karim"],
    image: "/img/project-3.png",
  },
  {
    id: 3,
    title: "Royal Garden Panglima",
    address: "Jl. Magelang, Lempake, Samarinda, Kalimantan Timur",
    badges: ["Kavling Produktif", "Kavling Villa"],
    image: "/img/project-4.png",
  },
  {
    id: 3,
    title: "Mulia Park Regency",
    address: "Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur",
    badges: ["Kavling", "Kavling Hook"],
    image: "/img/project-5.png",
  },
];

function Project() {
  return (
    <Container className="flex flex-wrap py-0 ">
      <div className="relative w-full bg-cover bg-center bg-no-repeat pt-10 px-4">
        <div className="relative max-w-7xl mx-auto">
          <div>
            <h1 className="font-inter font-semibold text-[30px] leading-[54px] tracking-[-0.9px]">
              Project
            </h1>
            <p className="font-inter font-normal text-[16px] leading-[30px] text-[#71717A]">
              Berikut adalah daftar project dari Panglima Propertindo
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {dataProject.map((item) => (
                <div key={item.id}>
                  <Card className="rounded-xl shadow-md overflow-hidden w-full pt-1">
                    <CardHeader className="p-0">
                      <div className="w-full h-full p-1">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full rounded-md"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 space-y-2">
                      <CardTitle className="text-base font-semibold text-[20px]">
                        {item.title}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-6 h-6 text-[#FA9500]" />
                        <span className="text-[14px]">{item.address}</span>
                      </div>
                      <a
                        href="#"
                        className="text-[#FA9500] text-sm inline-flex items-center gap-1 hover:underline"
                      >
                        Lihat di Map <ExternalLink className="w-4 h-4" />
                      </a>
                      <div className="pt-2">
                        <p className="text-sm font-medium mb-1 text-[#71717A]">
                          Tipe Unit
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.badges.map((badge, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="rounded-full px-3 py-1 text-sm border-[#FA9500] bg-[#FA950014] text-[14px] text-[#09090B] dark:text-white"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Project;
