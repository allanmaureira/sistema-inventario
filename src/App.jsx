import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

export default function App() {
  const [modo, setModo] = useState('cliente');
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSel, setCategoriaSel] = useState('Todas');
  const [menuCatAbierto, setMenuCatAbierto] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Arroz Grado 1 (1kg)', categoria: 'Abarrotes', precio: 1350, stock: 28, imagen: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80', oferta: true, precioAnterior: 1690 },
    { id: 2, nombre: 'Aceite Maravilla 1L', categoria: 'Abarrotes', precio: 2690, stock: 15, imagen: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80' },
    { id: 3, nombre: 'Leche Entera 1L', categoria: 'Lácteos', precio: 1100, stock: 45, imagen: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80' },
    { id: 4, nombre: 'Detergente Líquido 3L', categoria: 'Limpieza', precio: 8990, stock: 8, imagen: 'https://images.unsplash.com/photo-1585830812416-a6c86bb14576?auto=format&fit=crop&w=400&q=80', oferta: true, precioAnterior: 10990 },
    { id: 5, nombre: 'Bebida Cola 2.5L', categoria: 'Bebidas', precio: 2100, stock: 18, imagen: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=400&q=80' },
    { id: 6, nombre: 'Pan de Molde Familiar', categoria: 'Panadería', precio: 2400, stock: 4, imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', oferta: true, precioAnterior: 2890 },
    { id: 7, nombre: 'Tomate Ensalada (1kg)', categoria: 'Frutas y Verduras', precio: 1500, stock: 30, imagen: 'https://images.unsplash.com/photo-1592924357228-9564da86a77a?auto=format&fit=crop&w=400&q=80' },
    { id: 8, nombre: 'Manzana Fuji (1kg)', categoria: 'Frutas y Verduras', precio: 1800, stock: 20, imagen: 'https://images.unsplash.com/photo-1568702846914-96b305d2aa03?auto=format&fit=crop&w=400&q=80' },
    { id: 9, nombre: 'Yogurt Batido 125g', categoria: 'Lácteos', precio: 350, stock: 100, imagen: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80' },
    { id: 10, nombre: 'Fideos Spaghetti 400g', categoria: 'Abarrotes', precio: 750, stock: 50, imagen: 'https://images.unsplash.com/photo-1551462147-ff29853fda2e?auto=format&fit=crop&w=400&q=80' },
    { id: 11, nombre: 'Jabón Líquido Manos 500ml', categoria: 'Limpieza', precio: 2200, stock: 25, imagen: 'https://images.unsplash.com/photo-1600857999808-2c39e24693a1?auto=format&fit=crop&w=400&q=80' },
    { id: 12, nombre: 'Agua Mineral Sin Gas 1.5L', categoria: 'Bebidas', precio: 950, stock: 40, imagen: 'https://images.unsplash.com/photo-1520520745294-81e592754d9b?auto=format&fit=crop&w=400&q=80' },
    { id: 13, nombre: 'Café Instantáneo 170g', categoria: 'Abarrotes', precio: 4500, stock: 12, imagen: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80' },
    { id: 14, nombre: 'Queso Gauda Laminado 250g', categoria: 'Lácteos', precio: 2890, stock: 14, imagen: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80', oferta: true, precioAnterior: 3490 },
    { id: 15, nombre: 'Alimento Perro Adulto 3kg', categoria: 'Mascotas', precio: 9990, stock: 6, imagen: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80' },
    { id: 16, nombre: 'Alimento Gato Cachorro 1.5kg', categoria: 'Mascotas', precio: 8490, stock: 9, imagen: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80' }
  ]);

  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', categoria: 'Abarrotes', precio: '', stock: '', imagen: '' });

  const categorias = ['Todas', ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = productos.filter(p => {
    const coincideNombre = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCat = categoriaSel === 'Todas' || p.categoria === categoriaSel;
    return coincideNombre && coincideCat;
  });

  const eliminarProducto = (id) => setProductos(productos.filter(p => p.id !== id));

  const guardarProducto = (e) => {
    e.preventDefault();
    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.stock) return;
    const productoCreado = {
      id: Date.now(),
      nombre: nuevoProducto.nombre,
      categoria: nuevoProducto.categoria,
      precio: Number(nuevoProducto.precio),
      stock: Number(nuevoProducto.stock),
      imagen: nuevoProducto.imagen || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80'
    };
    setProductos([productoCreado, ...productos]);
    setNuevoProducto({ nombre: '', categoria: 'Abarrotes', precio: '', stock: '', imagen: '' });
    setModalAbierto(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      <Navbar modo={modo} setModo={setModo} />

      {modo === 'cliente' ? (
        <main className="max-w-6xl mx-auto p-4 sm:p-6 space-y-8 flex-1 w-full">
          <Banner />

          {/* BUSCADOR Y FILTRO DE CATEGORÍAS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch bg-slate-800 p-4 rounded-xl border border-slate-700">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="¿Qué estás buscando hoy?..."
              className="w-full sm:max-w-md bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-blue-500"
            />

            <div className="relative">
              <button
                onClick={() => setMenuCatAbierto(!menuCatAbierto)}
                className="w-full sm:w-auto flex items-center justify-between gap-3 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 px-4 py-2.5 rounded-lg text-sm font-semibold transition cursor-pointer"
              >
                <span>☰ Categoría: <strong className="text-blue-400">{categoriaSel}</strong></span>
                <span className="text-xs">{menuCatAbierto ? '▲' : '▼'}</span>
              </button>

              {menuCatAbierto && (
                <div className="absolute right-0 left-0 sm:left-auto mt-2 w-full sm:w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-30 overflow-hidden py-1">
                  {categorias.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setCategoriaSel(cat); setMenuCatAbierto(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition flex justify-between ${
                        categoriaSel === cat ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {cat} {categoriaSel === cat && '✓'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* GRILLA DE PRODUCTOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productosFiltrados.map((item) => (
              <div key={item.id} className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between hover:border-slate-600 transition">
                <div>
                  <div className="relative h-48 bg-slate-900">
                    <img src={item.imagen} alt={item.nombre} className="w-full h-full object-cover" />
                    {item.oferta && <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow">OFERTA</span>}
                    <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-[10px] px-2 py-0.5 rounded-md">{item.categoria}</span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-white line-clamp-1">{item.nombre}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-emerald-400">${item.precio.toLocaleString('es-CL')}</span>
                      {item.oferta && <span className="text-xs text-slate-400 line-through">${item.precioAnterior.toLocaleString('es-CL')}</span>}
                    </div>
                    <p className="text-xs text-slate-400">Stock disponible: {item.stock}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button onClick={() => alert(`Añadiste "${item.nombre}" al carrito`)} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl text-sm transition cursor-pointer">
                    + Agregar al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      ) : (
        <main className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6 flex-1 w-full">
          <header className="flex justify-between items-center bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
            <div>
              <h1 className="text-2xl font-bold text-amber-400">Panel de Control de Inventario</h1>
              <p className="text-slate-400 text-sm">Gestión interna de productos</p>
            </div>
            <button onClick={() => setModalAbierto(true)} className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-4 py-2 rounded-xl text-sm transition cursor-pointer">
              + Nuevo Producto
            </button>
          </header>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-slate-400 uppercase text-xs">
                <tr>
                  <th className="p-4">Producto</th>
                  <th className="p-4">Categoría</th>
                  <th className="p-4">Precio</th>
                  <th className="p-4">Stock</th>
                  <th className="p-4 text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {productos.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-700/30">
                    <td className="p-4 font-medium text-white flex items-center gap-3">
                      <img src={item.imagen} alt="" className="w-8 h-8 rounded object-cover" />
                      {item.nombre}
                    </td>
                    <td className="p-4 text-slate-300">{item.categoria}</td>
                    <td className="p-4 text-slate-300">${item.precio.toLocaleString('es-CL')}</td>
                    <td className="p-4"><span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400">{item.stock} unids.</span></td>
                    <td className="p-4 text-center">
                      <button onClick={() => eliminarProducto(item.id)} className="text-red-400 hover:bg-red-500/10 px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      )}

      {/* MODAL AGREGAR PRODUCTO */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-4">Agregar Nuevo Producto</h2>
            <form onSubmit={guardarProducto} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Nombre</label>
                <input type="text" required placeholder="Ej: Galletas Tritón" value={nuevoProducto.nombre} onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-white outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Precio ($)</label>
                  <input type="number" required placeholder="1200" value={nuevoProducto.precio} onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-white outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Stock</label>
                  <input type="number" required placeholder="10" value={nuevoProducto.stock} onChange={(e) => setNuevoProducto({ ...nuevoProducto, stock: e.target.value })} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-white outline-none" />
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t border-slate-700">
                <button type="button" onClick={() => setModalAbierto(false)} className="flex-1 bg-slate-700 text-slate-200 py-2.5 rounded-xl font-medium text-sm cursor-pointer">Cancelar</button>
                <button type="submit" className="flex-1 bg-amber-600 text-white py-2.5 rounded-xl font-medium text-sm cursor-pointer">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}