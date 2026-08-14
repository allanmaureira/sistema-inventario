import React, { useState, useEffect } from 'react';

export default function Banner() {
  const banners = [
    {
      id: 1,
      titulo: '🔥 Ofertas de la Semana',
      subtitulo: 'Hasta 30% de descuento en Abarrotes y Panadería',
      bg: 'from-blue-600 to-indigo-800'
    },
    {
      id: 2,
      titulo: '🥛 Especial Lácteos y Frescos',
      subtitulo: 'Lleva la mejor calidad directamente a tu mesa',
      bg: 'from-emerald-600 to-teal-800'
    },
    {
      id: 3,
      titulo: '🧹 Limpieza e Higiene',
      subtitulo: 'Aprovecha los precios rebajados en detergentes',
      bg: 'from-purple-600 to-pink-800'
    }
  ];

  const [actual, setActual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${banners[actual].bg} p-8 sm:p-12 transition-all duration-500 shadow-xl`}>
      <div className="max-w-md space-y-2 relative z-10">
        <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase inline-block">
          Destacado
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          {banners[actual].titulo}
        </h2>
        <p className="text-white/80 text-sm sm:text-base">
          {banners[actual].subtitulo}
        </p>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActual(idx)}
            className={`w-3 h-3 rounded-full transition ${
              actual === idx ? 'bg-white scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}