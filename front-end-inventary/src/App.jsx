import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Barside } from './components/Barside';
import { ProductsLayout } from './components/products/ProductsLayout';
import { Dashboard } from './components/Dashboard';
import { Usuarios } from './components/Usuarios';
import { Entradas } from './components/Entradas';
import { Salidas } from './components/Salidas';
import { Configuracion } from './components/Configuracion';
import { Toaster } from 'sonner';
function App() {
  return (
    <div className='bg-gray-200 h-screen w-screen text-center flex justify-center'>
      <div className=' w-[1600px]'>
        {/* <div className='w-full'> */}
        <Barside />
        <section>
          <main className=' h-full'>
            <>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/products' element={<ProductsLayout />} />
                <Route path='/usuarios' element={<Usuarios />} />
                <Route path='/entradas' element={<Entradas />} />
                <Route path='/salidas' element={<Salidas />} />
                <Route path='/configuracion' element={<Configuracion />} />
              </Routes>
            </>
          </main>
          <Toaster richColors />
        </section>
      </div>
    </div>
  );
}

export default App;
