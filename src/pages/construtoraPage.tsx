import React, { useEffect } from "react";
import CustomPage from "../components/CustomPage";
import { setFavicon } from "../utils/setFavicon";

const ConstrutoraPage: React.FC = () => {
  useEffect(() => {
    setFavicon('construtora'); // Define o favicon específico para essa página
  }, []);
  
  const customContent = (
    <>
      {/* Frase no Rodapé */}
      <div className="absolute md:bottom-32 bottom-28 left-0 w-full text-center text-white z-10">
        <p className="text-sm xsm:text-lg md:text-2xl font-extrabold text-[#007374] ">
          Compromisso e Qualidade
        </p>
      </div>
    </>
  );

  const slides = [
    {
      image: "/images/construtora/slide/bg-construtora-01.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-01.jpg",
      content: customContent
    },
    {
      image: "/images/construtora/slide/bg-construtora-02.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-02.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-03.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-03.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-04.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-04.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-05.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-05.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-06.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-06.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-07.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-07.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-08.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-08.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-09.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-09.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-10.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-10.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-11.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-11.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-12.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-12.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-13.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-13.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-14.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-14.jpg",
    },
    {
      image: "/images/construtora/slide/bg-construtora-15.jpg",
      mobileImage: "/images/construtora/slide/bg-construtora-mobile-15.jpg",
    },
  ];

  return (
    <CustomPage logo="/images/construtora/logo-construtora.png" slides={slides}>
      {/* Conteúdo adicional da página, caso necessário */}
    </CustomPage>
  );
};

export default ConstrutoraPage;
