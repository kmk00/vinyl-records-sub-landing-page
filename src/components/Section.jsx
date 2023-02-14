import React from "react";

function Section() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row bg-gradient-to-t from-[#A6876D]/30 to-[#A6876D]/40 p-4 ">
        <div className="flex flex-col p-4 max-w-4xl">
          <h2>O CLUBE DO DISCO</h2>
          <p className=" my-6 tracking-wide text-md sm:text-xl md:text-2xl">
            O serviço de assinatura mensal do clube oferece aos amantes da
            música a oportunidade de receber discos de vinil exclusivos e
            limitados diretamente em suas casas todos os meses.
          </p>
        </div>
        <img
          className="w-[400px] h-[360px] sm:h-[400px] md:w-[500px] md:h-[500px] "
          src="/images/album1.png"
          alt="First album cover"
        />
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center text-white bg-[#a6876d] p-4 ">
        <div className="flex flex-col p-4 max-w-4xl">
          <h2>O CLUBE DO DISCO</h2>
          <p className=" my-6 tracking-wide text-md sm:text-xl md:text-2xl">
            O serviço de assinatura mensal do clube oferece aos amantes da
            música a oportunidade de receber discos de vinil exclusivos e
            limitados diretamente em suas casas todos os meses.
          </p>
        </div>
        <img
          className="w-[400px] h-[360px] sm:h-[400px] md:w-[500px] md:h-[500px] "
          src="/images/album2.png"
          alt="Second album cover"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center  bg-gradient-to-t from-[#A6876D]/30 to-[#A6876D]/40  p-4 ">
        <div className="flex flex-col p-4 max-w-4xl">
          <h2>ARTISTAS NOVOS E CONSAGRADOS</h2>
          <p className=" my-6 tracking-wide text-md sm:text-xl md:text-2xl">
            Cada assinatura inclui discos de vinil de edição limitada,
            escolhidos a dedo por nossa equipe de curadores de música, além de
            uma seleção de brindes exclusivos, como camisetas, pôsteres e outros
            itens surpresa.
          </p>
        </div>
        <img
          className="w-[400px] h-[360px] sm:h-[400px] md:w-[500px] md:h-[500px]"
          src="/images/album3.png"
          alt="Third album cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row-reverse text-white bg-[#1d1b16] p-4 ">
        <div className="flex flex-col p-4 max-w-4xl">
          <h2>OFERTAS EXCLUSIVAS PARA MEMBROS</h2>
          <p className=" my-6 tracking-wide text-md sm:text-xl md:text-2xl">
            Além de receber discos especiais em casa todos os meses, os
            assinantes têm acesso a ofertas exclusivas e ganham cashback para
            utilizar na loja da Sunday Blues.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 p-4 shrink-0">
          <img
            className="w-[300px] h-[260px] sm:h-[300px] md:w-[400px] md:h-[400px] shrink-0"
            src="/images/album4.png"
            alt="Fourth album cover"
          />
          <h2 className="uppercase text">conheça os planos:</h2>
        </div>
      </div>
    </div>
  );
}

export default Section;
