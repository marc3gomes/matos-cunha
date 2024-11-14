import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface SlideContent {
  image: string;
  mobileImage?: string;
  title?: string;
  description?: string;
  content?: React.ReactNode; // Novo campo para conteúdo personalizado
}

interface CustomPageProps {
  logo?: string;
  slides?: SlideContent[];
  bottomLogos?: { src: string; alt: string; route: string }[];
  showSocialIcons?: boolean;
  children?: React.ReactNode;
  spacer?: boolean;
}

const CustomPage: React.FC<CustomPageProps> = ({
  logo,
  slides,
  spacer,
  bottomLogos,
  showSocialIcons = true,
  children,
}) => {
  return (
    <div className="relative h-screen w-screen">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full w-full absolute top-0 left-0 -z-10"
      >
        {slides &&
          slides.length > 0 &&
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={
                    window.innerWidth < 768 && slide.mobileImage
                      ? slide.mobileImage
                      : slide.image
                  }
                  alt={slide.title ? slide.title : `slide-${index.toString()}`}
                  className="object-cover w-full h-full"
                />

                {/* Overlay isolado */}
                <div className="absolute inset-0  flex flex-col items-center justify-center text-white  pointer-events-none">
                  {slide.content ? (
                    slide.content
                  ) : (
                    <>
                      {slide.title && (
                        <h2 className="text-3xl font-bold mb-4">
                          {slide.title}
                        </h2>
                      )}
                      {slide.description && (
                        <p className="text-lg">{slide.description}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Botões de navegação fora do overlay */}
      <button className="custom-prev bg-white shadow-lg text-green-500 rounded-full absolute top-1/2 left-6 z-30 h-12 w-12 flex items-center justify-center transform -translate-y-1/2">
        <ChevronLeftIcon />
      </button>
      <button className="custom-next bg-white shadow-lg text-green-500 rounded-full absolute top-1/2 right-6 z-30 h-12 w-12 flex items-center justify-center transform -translate-y-1/2">
        <ChevronRightIcon />
      </button>

      {logo && (
        <header className="absolute top-0 left-0 w-full flex justify-center items-center p-6 z-50 flex-col gap-8">
          <img src={logo} alt="Logo Principal" className="h-20 md:h-24 mt-8" />
          {spacer && <div className="border-b-[1px] w-1/2 border-black"></div>}
        </header>
      )}
      <div className="absolute  inset-0 flex flex-col justify-center items-center text-white z-10">
        {children}
      </div>

      {bottomLogos && bottomLogos.length > 0 && (
        <div className="absolute bottom-8 md:bottom-24 left-0 w-full flex justify-center gap-4 md:gap-10 z-10 px-8 flex-col md:flex-row items-center ">
          {bottomLogos.map((logo, index) => (
            <Link key={index} to={logo.route}>
              <img src={logo.src} alt={logo.alt} className="h-16" />
            </Link>
          ))}
        </div>
      )}

      {showSocialIcons && (
        <footer className="absolute bottom-10 md:bottom-14 left-0 w-full flex justify-center p-6 z-10">
          <div className="flex gap-6">
            <a href="https://instagram.com">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-6" />
            </a>
            <a href="https://youtube.com">
              <img src="/icons/youtube.svg" alt="Youtube" className="h-6" />
            </a>
          </div>
        </footer>
      )}
    </div>
  );
};

export default CustomPage;
