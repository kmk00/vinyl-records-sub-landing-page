import React from "react";

function Newsletter() {
  return (
    <div className="flex relative xl:grid grid-cols-2  flex-col-reverse items-center">
      <div className="h-full bg-gradient-to-t from-[#0f0e0c] to-transparent absolute w-full z-20" />
      <img
        className="w-full relative z-10"
        src="/images/image.png"
        alt="Decoration Image"
      />
      <div className="w-full z-30 px-8 bg-gradient-to-t items-center justify-center">
        <div className="grid grid-cols-1 w-full md:flex md:flex-row md:justify-center  gap-8 mt-4 items-center">
          <button className=" bg-[#00a5c0] text-white md:text-md text-md font-black py-4 px-12 uppercase">
            dúvidas frequentes
          </button>
          <button className=" bg-[#00a5c0] text-white md:text-md text-md font-black py-4 px-12">
            ATENDIMENTO
          </button>
          <button className=" bg-[#00a5c0] text-white md:text-md text-md font-black py-4 px-12">
            LOJA
          </button>
        </div>
        <div className="w-full mx-auto mt-8 md:min-w-2xl max-w-4xl">
          <h2 className="text-white ">NEWSLETTER</h2>
          <p className="text-white text-2xl py-4">
            *Se inscreva e receba{" "}
            <span className="text-orange-600 "> 10% de desconto </span> na sua
            primeira compra.
          </p>
          <form className="grid text-xl gap-4 w-full py-2">
            <input
              className="px-4 py-4 bg-gray-500"
              placeholder="seumelhoremail@email.com"
            ></input>
            <button className="px-4 py-4 bg-[#cc9225] text-white font-black uppercase tracking-widest">
              se inscreva
            </button>
          </form>
          <h3 className="text-white mb-8">NOS SIGA NAS REDES</h3>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
