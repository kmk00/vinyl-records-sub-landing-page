import React from "react";

function CardItem({ card }) {
  return (
    <div className="w-full flex flex-col xl:w-full md:w-3/4 sm:w-3/4 text-white font-black">
      <div className="bg-[#1d1b16] text-center uppercase">
        <h3>{card.mainTitle}</h3>
        <h4>{card.heading}</h4>
      </div>
      <div className=" bg-gradient-to-t from-[#1d1b16]/80 to-transparent">
        <div className="mx-auto relative max-w-[400px] h-96  pt-12 font-light">
          <img
            src="/images/album1.png"
            className="absolute z-10 opacity-60 top-0"
          />
          <div className=" bottom-5 absolute z-20 translate-x-[25%]">
            <p>Edições Anteriores:</p>
            <p>{card.title}</p>
            <p>{card.vinil}</p>
          </div>
        </div>
      </div>
      <div className="text-center font-medium bg-[#1d1b16] py-8 flex flex-col items-center gap-6">
        <h3 className="text-center text">{card.price}</h3>
        <div>
          <p className="font-bold">2 Discos de Vinil ou 1 Disco Duplo</p>
          <p>Exclusivo para os assinantes do Clube</p>
        </div>
        <div>
          <p className="font-bold">Curadoria de artistas renomados</p>
          <p>Seleção dos melhores discos para a sua coleção</p>
        </div>
        <div>
          <p className="font-bold">Brindes exclusivos</p>
          <p>você receberá itens exclusivos dos artistas </p>
        </div>
        <div>
          <p className="font-bold">{`${card.cashback}% de Cashback`}</p>
          <p>Para utilizar na loja da Sunday Blues</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
