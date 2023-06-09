import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routesProject } from '../assets/routes';
import {
  IconLayoutDashboard,
  IconBrandProducthunt,
  IconUser,
  IconArrowBigDownLinesFilled,
  IconArrowBigUpLinesFilled,
  IconSettings,
  IconAccessible,
} from '@tabler/icons-react';
export const Barside = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(() => routesProject.dashboard);

  useEffect(() => {
    const state = localStorage.getItem('state');
    if (state === routesProject.dashboard) return;
    setState(state);
    state && navigate(`/${state}`);
  }, []);

  useEffect(() => {
    localStorage.setItem('state', state);
  }, [state]);

  return (
    <section className='fixed border-r-[1px] border-gray-300 w-[130px] flex flex-col h-full bg-white p-3 '>
      <h1 className='py-5 border-b-2 text-3xl inline-block mb-6'>Duska TECH</h1>
      <span>{}</span>
      <div className='flex gap-4 flex-col text-1xl text-black [&>div]:bg-gray-200 [&>div]:font-bold [&>div]:rounded-xl'>
        <div>
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

        <div>
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

        <div>
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

        <div>
          <Link
            onClick={() => setState(routesProject.clientes)}
            className={`flex justify-center items-center h-full py-3 ${
              state === routesProject.clientes ? 'text-blue-700' : 'inherit'
            }`}
            to='/clientes'
          >
            <div className='flex justify-center w-full gap-2'>
              <IconAccessible size={40} />
            </div>
          </Link>
        </div>

        <div>
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

        <div>
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

        <div>
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
