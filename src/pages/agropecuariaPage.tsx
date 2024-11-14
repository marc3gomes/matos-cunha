import React, { useEffect } from "react";
import CustomPage from "../components/CustomPage";
import { setFavicon } from "../utils/setFavicon";

const AgropecuariaPage: React.FC = () => {
  useEffect(() => {
    setFavicon('agropecuaria'); // Define o favicon específico para essa página
  }, []);

  const customContent = (
    <>
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[78rem] p-8 text-white gap-y-8 md:gap-x-36 items-center md:items-start">
        {/* Conteúdo do lado esquerdo */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="flex flex-col items-center gap-14">
            <img
              src="/images/agropecuaria/logo.png"
              alt="Logo da agropecuaria"
              className="w-44"
            />
            <div className="flex gap-6 z-50">
              <a href="https://instagram.com">
                <img
                  src="/icons/instagram_white.svg"
                  alt="Instagram"
                  className="h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const slides = [
    {
      image: "/images/agropecuaria/bg.png",
      content: customContent,
    },
  ];

  return <CustomPage slides={slides} showSocialIcons={false} />;
};

export default AgropecuariaPage;
