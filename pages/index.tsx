import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">HUMANIDAD.IO</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
        Este no es un sitio web. Es una semilla.
        <br />
        Un espacio digital para que la humanidad se escuche a sí misma.
      </p>
      <div className="border border-white/20 rounded-2xl p-6 max-w-3xl text-sm md:text-base text-white/80 leading-relaxed">
        <p className="mb-4 font-semibold text-white">MANIFIESTO FUNDACIONAL</p>
        <p>
          HUMANIDAD.IO no es una empresa. No es una red social. No es una marca.
          Es un club virtual anónimo y descentralizado, fundado con un propósito claro:
          crear un espacio donde la humanidad pueda escucharse a sí misma.
        </p>
        <p className="mt-4">
          En un mundo dividido por nombres, banderas, ideologías y sistemas,
          nace HUMANIDAD como un lugar donde todas las voces valen lo mismo.
        </p>
        <p className="mt-4 italic">
          Este sitio está en construcción.
          <br />
          Si resuena contigo, vuelve.
        </p>
      </div>
    </div>
  );
}
