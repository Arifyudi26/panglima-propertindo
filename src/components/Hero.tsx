import { Container } from "@/components/Container";
import heroImg from "../../public/img/bg.png";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap pb-0 pt-0">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat py-20 px-4"
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-2xl text-black">
              <h1 className="font-inter font-semibold text-[36px] leading-[54px] tracking-[-0.9px]">
                <span className="text-[#287C3E]">Hidup Nyaman & Berkah</span>
                dengan Properti Syariah Kelas Dunia
              </h1>

              <p className="font-inter font-normal text-[20px] leading-[30px] py-5">
                Developer Properti Syariah terdepan menghadirkan solusi properti
                tanpa riba dan sesuai prinsip syariah. Daftar dan booking
                sekarang juga!
              </p>

              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <Button
                  asChild
                  className="px-8 py-4 text-lg font-medium bg-[#287C3E] hover:bg-green-700 text-white"
                >
                  <a href="#" rel="noopener">
                    Daftar & Beli NUB
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
