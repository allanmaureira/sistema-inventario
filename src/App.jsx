import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

export default function App() {
  const [modo, setModo] = useState('cliente');
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSel, setCategoriaSel] = useState('Todas');
  const [menuCatAbierto, setMenuCatAbierto] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Arroz Grado 1 (1kg)', categoria: 'Abarrotes', precio: 1350, stock: 28, imagen: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80', oferta: true, precioAnterior: 1690 },
    { id: 2, nombre: 'Aceite Maravilla 1L', categoria: 'Abarrotes', precio: 3690, stock: 15, imagen: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80' },
    { id: 3, nombre: 'Leche Entera 1L', categoria: 'Lácteos', precio: 1100, stock: 45, imagen: 'https://th.bing.com/th/id/OIP.cqwk1Eu-ElkGp6NDrs6EUAHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 4, nombre: 'Detergente Líquido 3L', categoria: 'Limpieza', precio: 8990, stock: 8, imagen: 'https://th.bing.com/th/id/OIP.BGdQTyfOwm7G3ZqrAMCkqwHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3', oferta: true, precioAnterior: 10990 },
    { id: 5, nombre: 'Bebida Cola 2.5L', categoria: 'Bebidas', precio: 2100, stock: 18, imagen: 'https://th.bing.com/th/id/OIP.5kDJn4IpdTARLw3hroUlowHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 6, nombre: 'Pan de Molde Familiar', categoria: 'Panadería', precio: 2400, stock: 4, imagen: 'https://th.bing.com/th/id/OIP.fWndcnIgEIP0toLmEia5NgHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3s', oferta: true, precioAnterior: 2890 },
    { id: 7, nombre: 'Fideos Spaghetti Carozzi 400 grs', categoria: 'Abarrotes', precio: 890, stock: 25, imagen: 'https://th.bing.com/th/id/OIP.4KkzZpYWLC5LPSBVeoRzYQHaHa?w=142&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 8, nombre: 'Manzana Fuji 1kg', categoria: 'Frutas y Verduras', precio: 1800, stock: 20, imagen: 'https://th.bing.com/th/id/OIP.GA7umZGHzuAQ85E3NZBLBAHaIR?w=160&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 9, nombre: 'Yogurt Batido 125g', categoria: 'Lácteos', precio: 350, stock: 100, imagen: 'https://th.bing.com/th/id/OIP.r129O78__OMh4XRjW_U5EgHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 10, nombre: 'Chocolate Trencito 150g', categoria: 'Abarrotes', precio: 1500, stock: 50, imagen: 'data:image/webp;base64,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' },
    { id: 11, nombre: 'Jabón Líquido Manos 500ml', categoria: 'Limpieza', precio: 2200, stock: 25, imagen: 'https://th.bing.com/th/id/OIP._3xw1GhZXBs1TYV3kVxnbQHaHa?w=198&h=198&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 12, nombre: 'Agua Mineral Sin Gas 1.5L', categoria: 'Bebidas', precio: 950, stock: 40, imagen: 'https://th.bing.com/th/id/OIP.iyCZac4Y9cfxvKvLVL9HNAHaHa?w=187&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 13, nombre: 'Café Instantáneo 170g', categoria: 'Abarrotes', precio: 4500, stock: 12, imagen: 'https://th.bing.com/th/id/OIP.OcU2HUihvHK9wEPO9eDvPAHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 14, nombre: 'Queso Gauda Laminado 250g', categoria: 'Lácteos', precio: 2890, stock: 14, imagen: 'https://th.bing.com/th/id/OIP.57_sGOTXlupSYa-W6NV6vAHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3', oferta: true, precioAnterior: 3490 },
    { id: 15, nombre: 'Alimento Perro Adulto 15kg', categoria: 'Mascotas', precio: 15000, stock: 6, imagen: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80' },
    { id: 16, nombre: 'Alimento Gato Pequeño 3kg', categoria: 'Mascotas', precio: 8490, stock: 9, imagen: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80' },
    { id: 17, nombre: 'Shampoo Hidra Purificante 370ml', categoria: 'Higiene Personal', precio: 5200, stock: 18, imagen: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80' },
    { id: 18, nombre: 'Pasta de Dientes', categoria: 'Higiene Personal', precio: 3000, stock: 18, imagen: 'https://th.bing.com/th/id/OIP.BO47Hsq6GcqECbMlyhjSzwHaHa?w=193&h=193&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 19, nombre: 'Cepillo de Dientes', categoria: 'Higiene Personal', precio: 1100, stock: 45, imagen: 'https://th.bing.com/th/id/OIP.I7mmWPeCMNA2pRdojtm9vgHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { id: 20, nombre: 'Acondicionador Dove', categoria: 'Higiene Personal', precio: 3300, stock: 15, imagen: 'https://th.bing.com/th/id/OIP.a8mvD2W6whLqLQ3IlNOn3wHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
  ]);

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '', categoria: 'Abarrotes', precio: '', stock: '', imagen: '', oferta: false, precioAnterior: ''
  });

  // Funciones de Carrito
  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item);
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const modificarCantidad = (id, cambio) => {
    setCarrito(prev => prev.map(item => {
      if (item.id === id) {
        const nuevaCant = item.cantidad + cambio;
        return nuevaCant > 0 ? { ...item, cantidad: nuevaCant } : item;
      }
      return item;
    }));
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  // Funciones de Administración
  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nuevoProducto.nombre || !nuevoProducto.precio) return;
    
    const productoNuevo = {
      ...nuevoProducto,
      id: Date.now(),
      precio: Number(nuevoProducto.precio),
      stock: Number(nuevoProducto.stock) || 0,
      precioAnterior: nuevoProducto.precioAnterior ? Number(nuevoProducto.precioAnterior) : null,
      imagen: nuevoProducto.imagen || 'https://via.placeholder.com/150'
    };

    setProductos([...productos, productoNuevo]);
    setNuevoProducto({ nombre: '', categoria: 'Abarrotes', precio: '', stock: '', imagen: '', oferta: false, precioAnterior: '' });
    setModalAbierto(false);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  // Filtros
  const productosFiltrados = productos.filter(p => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSel === 'Todas' || p.categoria === categoriaSel;
    return coincideBusqueda && coincideCategoria;
  });

  const totalCarrito = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const cantTotalCarrito = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 relative">
      <Navbar 
        modo={modo}
        setModo={setModo}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoriaSel={categoriaSel}
        setCategoriaSel={setCategoriaSel}
        menuCatAbierto={menuCatAbierto}
        setMenuCatAbierto={setMenuCatAbierto}
        cantCarrito={cantTotalCarrito}
        setCarritoAbierto={setCarritoAbierto}
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Banner />

        <div className="flex justify-between items-center my-6">
          <h2 className="text-2xl font-bold">Catálogo de Productos</h2>
          {modo === 'admin' && (
            <button 
              onClick={() => setModalAbierto(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              + Agregar Producto
            </button>
          )}
        </div>

        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productosFiltrados.map(p => (
            <div key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between border">
              <div className="relative">
                <img src={p.imagen} alt={p.nombre} className="w-full h-48 object-cover" />
                {p.oferta && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    OFERTA
                  </span>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase">{p.categoria}</span>
                  <h3 className="font-bold text-lg leading-snug">{p.nombre}</h3>
                  <p className="text-sm text-gray-500">Stock: {p.stock}</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-gray-900">${p.precio.toLocaleString('es-CL')}</span>
                    {p.oferta && p.precioAnterior && (
                      <span className="text-sm text-gray-400 line-through">${p.precioAnterior.toLocaleString('es-CL')}</span>
                    )}
                  </div>
                  {modo === 'cliente' ? (
                    <button 
                      onClick={() => agregarAlCarrito(p)}
                      className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Agregar al carrito
                    </button>
                  ) : (
                    <button 
                      onClick={() => eliminarProducto(p.id)}
                      className="w-full mt-3 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                      Eliminar Producto
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Botón Flotante del Carrito */}
      {modo === 'cliente' && (
        <button
          onClick={() => setCarritoAbierto(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition flex items-center space-x-2 z-40"
          title="Abrir Carrito"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          {cantTotalCarrito > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cantTotalCarrito}
            </span>
          )}
        </button>
      )}

      {/* Modal Carrito */}
      {carritoAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-bold">Carrito de Compras</h2>
                <button onClick={() => setCarritoAbierto(false)} className="text-gray-500 font-bold text-xl">&times;</button>
              </div>
              <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {carrito.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">El carrito está vacío</p>
                ) : (
                  carrito.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <h4 className="font-bold text-sm">{item.nombre}</h4>
                        <p className="text-xs text-gray-500">${item.precio.toLocaleString('es-CL')} c/u</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => modificarCantidad(item.id, -1)} className="bg-gray-200 px-2 rounded font-bold">-</button>
                        <span className="text-sm font-semibold">{item.cantidad}</span>
                        <button onClick={() => modificarCantidad(item.id, 1)} className="bg-gray-200 px-2 rounded font-bold">+</button>
                        <button onClick={() => eliminarDelCarrito(item.id)} className="text-red-500 ml-2 text-xs font-bold">✕</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-bold mb-4">
                <span>Total:</span>
                <span>${totalCarrito.toLocaleString('es-CL')}</span>
              </div>
              <button 
                onClick={() => alert('¡Compra procesada con éxito!')}
                disabled={carrito.length === 0}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition disabled:opacity-50"
              >
                Pagar Ahora
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Agregar Producto (Admin) */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Agregar Nuevo Producto</h2>
            <form onSubmit={agregarProducto} className="space-y-3">
              <input 
                type="text" 
                placeholder="Nombre del producto" 
                value={nuevoProducto.nombre}
                onChange={e => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
                className="w-full border p-2 rounded-lg"
                required
              />
              <select 
                value={nuevoProducto.categoria}
                onChange={e => setNuevoProducto({ ...nuevoProducto, categoria: e.target.value })}
                className="w-full border p-2 rounded-lg"
              >
                <option value="Abarrotes">Abarrotes</option>
                <option value="Lácteos">Lácteos</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Panadería">Panadería</option>
                <option value="Frutas y Verduras">Frutas y Verduras</option>
                <option value="Mascotas">Mascotas</option>
                <option value="Higiene Personal">Higiene Personal</option>
              </select>
              <div className="grid grid-cols-2 gap-2">
                <input 
                  type="number" 
                  placeholder="Precio ($)" 
                  value={nuevoProducto.precio}
                  onChange={e => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
                  className="w-full border p-2 rounded-lg"
                  required
                />
                <input 
                  type="number" 
                  placeholder="Stock" 
                  value={nuevoProducto.stock}
                  onChange={e => setNuevoProducto({ ...nuevoProducto, stock: e.target.value })}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
              <input 
                type="text" 
                placeholder="URL de la Imagen" 
                value={nuevoProducto.imagen}
                onChange={e => setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })}
                className="w-full border p-2 rounded-lg"
              />
              <div className="flex items-center space-x-2 pt-2">
                <input 
                  type="checkbox" 
                  id="oferta"
                  checked={nuevoProducto.oferta}
                  onChange={e => setNuevoProducto({ ...nuevoProducto, oferta: e.target.checked })}
                />
                <label htmlFor="oferta" className="text-sm font-semibold">¿Está en Oferta?</label>
              </div>
              {nuevoProducto.oferta && (
                <input 
                  type="number" 
                  placeholder="Precio Anterior ($)" 
                  value={nuevoProducto.precioAnterior}
                  onChange={e => setNuevoProducto({ ...nuevoProducto, precioAnterior: e.target.value })}
                  className="w-full border p-2 rounded-lg mt-2"
                />
              )}
              <div className="flex justify-end space-x-2 pt-4">
                <button 
                  type="button" 
                  onClick={() => setModalAbierto(false)} 
                  className="px-4 py-2 bg-gray-300 rounded-lg font-semibold"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}