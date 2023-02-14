import React from "react";

function Comments() {
  return (
    <div className="md:my-24 flex flex-col items-center">
      <h2 className="uppercase text-white w-full text-left py-4">
        o que os membros do clube dizem:
      </h2>
      <div className="flex flex-col md:flex-row-reverse md:justify-between items-center">
        <div className="md:mr-12">
          <img
            className=" w-48 h-48 rounded-full"
            src="/images/woman.png"
            alt="Profile Image"
          />
          <h3>SOFIA B.</h3>
          <h4>MEMBRO DESDE 2022</h4>
        </div>
        <p className="text-2xl md:w-1/2 tracking-normal text-white py-8">
          "Eu sou membro do clube de assinatura da Sunday Blues há alguns meses
          agora e não posso estar mais satisfeita com a minha experiência.”
        </p>
      </div>
    </div>
  );
}

export default Comments;
