import { buttonStyle } from '../../utils/buttonStyle';
import { EditFormProducts, EditImgProducts } from './EditFormProducts';
import { FormProducts } from './FormProducts';
import { IconTrash } from '@tabler/icons-react';

export const ProductsTable = ({
  products,
  isFetching,
  mutate,
  setOpenForm,
  openForm,
  isError,
}) => {
  return (
    <div className='mt-5'>
      <table className=' mx-auto my-auto w-[96%] rounded-lg'>
        <thead className='bg-gray-50 border-b-2 border-gray-200'>
          <tr>
            <td className='p-3 text-2sm font-semibold tracking-wide text-left'>
              Codigo
            </td>
            <td className='p-3 text-2sm font-semibold tracking-wide text-left '>
              Producto
            </td>
            <td className='p-3 text-2sm font-semibold tracking-wide text-left'>
              Categoria
            </td>

            <td className='p-3 text-2sm font-semibold tracking-wide text-left'>
              Precio compra
            </td>
            <td className='p-3 text-2sm font-semibold tracking-wide text-left'>
              Precio venta
            </td>
            <td className='p-3 text-2sm font-semibold tracking-wide text-left'>
              Stock
            </td>
            <td className='p-3 text-2sm font-semibold tracking-wide text-center'>
              Acciones
            </td>
          </tr>
        </thead>
        <tbody>
          {!isFetching &&
            products &&
            products.map((data, i) => {
              const color = i % 2 === 0 ? 'bg-white' : 'bg-gray-50';
              return (
                <tr key={data._id} className={`${color} `}>
                  <td className='p-3 text-2sm text-left text-blue-700 font-bold'>
                    {data.Codigo}
                  </td>
                  <td>
                    <div className='p-3 text-2sm text-gray-700 flex justify-between gap-5'>
                      <EditImgProducts
                        img={data.img}
                        Descripcion={data.Descripcion}
                      />
                      <div className='w-[70%] flex items-center '>
                        <p>{data.Descripcion}</p>
                      </div>
                    </div>
                  </td>
                  <td className='p-3 text-2sm text-left text-gray-700 '>
                    {data.Categoria}
                  </td>

                  <td className='p-3 text-2sm text-left  text-gray-700 '>
                    {new Intl.NumberFormat('es-PE', {
                      style: 'currency',
                      currency: 'PEN',
                    }).format(data.PrecioCompra)}
                  </td>
                  <td className='p-3 text-2sm text-left  text-gray-700 '>
                    {new Intl.NumberFormat('es-PE', {
                      style: 'currency',
                      currency: 'PEN',
                    }).format(data.PrecioVenta)}
                  </td>
                  <td className='p-3 text-2sm text-left  text-gray-700 '>
                    {data.Stock}
                  </td>
                  <td>
                    <div className='flex justify-around items-center '>
                      <EditFormProducts product={data} />

                      <button
                        onClick={() => mutate(data._id)}
                        className={`${buttonStyle} `}
                      >
                        <IconTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          {isFetching && (
            <tr>
              <td colSpan='7' className='text-2xl pt-5'>
                Cargando los datos.
              </td>
            </tr>
          )}
          {isError && (
            <tr>
              <td colSpan='7' className='text-2xl pt-5'>
                Error al cargar los datos.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {openForm && <FormProducts open={setOpenForm} />}
    </div>
  );
};
