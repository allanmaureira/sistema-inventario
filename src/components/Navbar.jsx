import React from 'react';

export default function Navbar({ modo, setModo }) {
  return (
    <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-40 px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛒</span>
          <span className="font-bold text-xl text-blue-400">SuperMarket Express</span>
        </div>

        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => setModo('cliente')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              modo === 'cliente' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            🛍️ Modo Cliente
          </button>
          <button
            onClick={() => setModo('admin')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              modo === 'admin' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            ⚙️ Modo Admin
          </button>
        </div>
      </div>
    </nav>
  );
}