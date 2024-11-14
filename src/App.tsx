import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomPage from "./components/CustomPage";
import ConstrutoraPage from "./pages/construtoraPage";
import { useEffect, useState } from "react";
import AgropecuariaPage from "./pages/agropecuariaPage";
import CeramicaPage from "./pages/ceramicaPage";

const App = () => {
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Simula o carregamento de dados (pode ser substituído por algo mais real, como uma API)
    const timer = setTimeout(() => {
      setLoading(false); // Define "loading" como false após um atraso (simulando o carregamento)
    }, 2000); // Ajuste o tempo conforme necessário

    return () => clearTimeout(timer); // Limpa o timer quando o componente for desmontado
  }, []);

  const slides = [{ image: "/images/bg-grupo.jpg" }];

  const bottomLogos = [
    {
      src: "/logo-construtora.svg",
      alt: "Logo Construtora",
      route: "/construtora",
    },
    { src: "/logo-ceramica.svg", alt: "Logo Cerâmica", route: "/ceramica" },
    {
      src: "/logo-agropecuaria.svg",
      alt: "Logo Agropecuária",
      route: "/agropecuaria",
    },
  ];

  // Crie qualquer conteúdo que queira passar para o CustomPage, seja ele simples ou complexo
  const customContent = (
    <div className="text-xl md:text-2xl text-center max-w-xl mx-8 mb-28 md:mb-0">
      Com <strong>12 anos</strong> de mercado, o{" "}
      <strong>Grupo Matos Cunha</strong> une tradição e inovação em seus
      negócios:
      <br />
      Construtora, Cerâmica e Agropecuária.
      <br />
      <strong>
        Excelência e compromisso que transformam cada projeto em resultados
        sólidos.
      </strong>
    </div>
  );

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen animate-pulse">
          <div className="relative w-14 h-20 left-[0.7rem]">
            {/* L de cabeça para baixo (cinza claro) */}
            <div className="absolute top-0 left-0 w-8 h-full bg-gray-300"></div>
            <div className="absolute top-0 left-0 w-14 h-7 bg-gray-300"></div>
          </div>
          <div className="relative w-14 h-20 right-[0.7rem]">
            {/* L invertido (cinza claro) */}
            <div className="absolute bottom-0 right-0 w-8 h-full bg-gray-300"></div>
            <div className="absolute bottom-0 right-0 w-14 h-7 bg-gray-300"></div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <CustomPage
                  logo="/logo.svg"
                  slides={slides}
                  bottomLogos={bottomLogos}
                  showSocialIcons={false} // Defina como false se não quiser exibir as redes sociais
                  spacer
                >
                  {customContent}
                </CustomPage>
              }
            />
            <Route path="/construtora" element={<ConstrutoraPage />} />
            <Route path="/agropecuaria" element={<AgropecuariaPage />} />
            <Route path="/ceramica" element={<CeramicaPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
