import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routesProject } from '../assets/routes';
import {
  IconLayoutDashboard,
  IconBrandProducthunt,
  IconUser,
  IconArrowBigDownLinesFilled,
  IconArrowBigUpLinesFilled,
  IconSettings,
} from '@tabler/icons-react';
export const Barside = () => {
  const [state, setState] = useState(() => {
    const state = localStorage.getItem('state');
    return state ?? routesProject.general;
  });

  useEffect(() => {
    localStorage.setItem('state', state);
  }, [state]);

  return (
    <section className='fixed border-r-[1px] border-gray-300 w-[130px] flex flex-col h-full bg-white p-3 '>
      <h1 className='py-5 border-b-2 text-3xl inline-block mb-6'>Duska TECH</h1>
      <span>{}</span>
      <div className='flex gap-4 flex-col text-1xl text-black '>
        <div className=' bg-gray-200 font-bold rounded-xl'>
          <Link
            to='/'
            onClick={() => setState(routesProject.dashboard)}
            className={`flex justify-center items-center h-full py-3 ${
              state === routesProject.dashboard ? 'text-blue-700' : 'inherit'
            } `}
          >
            <div className='flex justify-center w-full gap-2 '>
              <IconLayoutDashboard size={40} />
            </div>
          </Link>
        </div>

        <div className=' bg-gray-200 font-bold rounded-xl'>
          <Link
            to='/products'
            onClick={() => setState(routesProject.products)}
            className={`flex justify-center items-center h-full py-3 ${
              state === routesProject.products ? 'text-blue-700' : 'inherit'
            }`}
          >
            <div className='flex justify-center w-full gap-2'>
              <IconBrandProducthunt size={40} />
            </div>
          </Link>
        </div>
        <div className=' bg-gray-200 font-bold rounded-xl'>
          <Link
            onClick={() => setState(routesProject.usuarios)}
            className={`flex justify-center items-center h-full py-3 ${
              state === routesProject.usuarios ? 'text-blue-700' : 'inherit'
            }`}
            to='/usuarios'
          >
            <div className='flex justify-center w-full gap-2'>
              <IconUser size={40} />
            </div>
          </Link>
        </div>
        <div className=' bg-gray-200 font-bold rounded-xl'>
          <Link
            onClick={() => setState(routesProject.entradas)}
            className={`flex justify-center items-center h-full py-3 ${
              state === routesProject.entradas ? 'text-blue-700' : 'inherit'
            }`}
            to='/entradas'
          >
            <div className='flex justify-center w-full gap-2'>
              <IconArrowBigDownLinesFilled size={40} />
            </div>
          </Link>
        </div>
        <div className=' bg-gray-200 font-bold rounded-xl'>
          <Link
            onClick={() => setState(routesProject.salidas)}
            className={`flex justify-center items-center h-full py-3 ${
              state === routesProject.salidas ? 'text-blue-700' : 'inherit'
            }`}
            to='/salidas'
          >
            <div className='flex justify-center w-full gap-2'>
              <IconArrowBigUpLinesFilled size={40} />
            </div>
          </Link>
        </div>
        <div className=' bg-gray-200 font-bold rounded-xl'>
          <Link
            onClick={() => setState(routesProject.configuracion)}
            className={`flex justify-center items-center h-full py-3 ${
              state === routesProject.configuracion
                ? 'text-blue-700'
                : 'inherit'
            }`}
            to='/configuracion'
          >
            <div className='flex justify-center w-full gap-2'>
              <div className='flex justify-center w-full gap-2'>
                <IconSettings size={40} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <h3 className='absolute bottom-6 flex justify-center w-full left-0 '>
        Wellcome back duskalor
      </h3>
    </section>
  );
};
