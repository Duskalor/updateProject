import { ModalDelete } from '../../componentsUtils/ModalDelete';
import { EditFormProducts } from './EditFormProducts';
import { EditImgProducts } from './EditImgProducts';
import { FormProducts } from './FormProducts';

export const ProductsTable = ({
  products,
  setOpenForm,
  openForm,
  isError,
  isLoading,
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
          {!isLoading &&
            products &&
            products.map((data, i) => {
              const color = i % 2 === 0 ? 'bg-white' : 'bg-gray-50';
              return (
                <tr key={data._id} className={`${color} `}>
                  <td className='p-3 text-2sm text-left text-blue-700 font-bold'>
                    {data.Codigo}
                  </td>
                  <td>
                    <div className='p-3 text-2sm text-gray-700 flex justify-between '>
                      <EditImgProducts
                        id={data._id}
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
                      <ModalDelete
                        id={data._id}
                        text={`Realmente desea eliminar el producto  '${data.Descripcion}' ??`}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          {isLoading && (
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
