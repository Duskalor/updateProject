import { useForm } from 'react-hook-form';
import { buttonStyle } from '../../utils/buttonStyle';
import { useState } from 'react';
import { useCategorias } from '../../hooks/useCategorias';
import { useEditProductos } from '../../hooks/useProductos';

export const EditFormProducts = ({ product }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [error, setError] = useState(null);
  const { categorias, isLoading } = useCategorias();
  const { mutate } = useEditProductos();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: product });

  const SubmitProduct = async (newProduct) => {
    if (JSON.stringify(product) !== JSON.stringify(newProduct)) {
      mutate(newProduct);
      setOpenModalEdit((prev) => !prev);
    } else {
      setError('No hay cambios');
    }
  };
  return (
    <>
      <button
        className={`${buttonStyle} w-[40%]`}
        onClick={() => setOpenModalEdit((prev) => !prev)}
      >
        Editar
      </button>

      {!isLoading && openModalEdit && (
        <div
          // onClick={() => {
          //   setOpenModalEdit((prev) => !prev);
          // }}
          className='absolute backdrop-blur-[1px] w-screen h-screen flex justify-center items-center top-0 left-0  bg-colors-black-rgba'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='h-[700px] w-[600px] bg-gray-200 rounded-lg  m-4 flex justify-center flex-col items-center'
          >
            <h2 className='text-3xl py-5' onClick={(e) => e.stopPropagation()}>
              <strong>EDITAR PRODUCTO</strong>
            </h2>
            <form
              onSubmit={handleSubmit(SubmitProduct)}
              className='h-full p-3 flex-col flex gap-4 w-[80%] '
              onClick={(e) => e.stopPropagation()}
            >
              {/*  codigo */}
              <div className='flex  flex-col '>
                <div className='flex gap-2 justify-around p-2'>
                  <label htmlFor='codigo' className='w-[30%]'>
                    Codigo
                  </label>
                  <input
                    className='w-[50%] pr-8 focus:outline-none'
                    type='text'
                    id='codigo'
                    ref={register}
                    {...register('Codigo', {
                      required: 'codigo obligatorio',
                    })}
                  />
                </div>
                {errors.Codigo && (
                  <p className='text-red-600'>{errors.Codigo?.message}</p>
                )}
              </div>

              {/*  description */}
              <div className='flex  flex-col '>
                <div className='flex gap-2 justify-around p-2 items-center'>
                  <label htmlFor='description' className='w-[30%]'>
                    Description
                  </label>
                  <textarea
                    className='w-[50%] pr-8 border-0 focus:outline-none'
                    type='text'
                    id='description'
                    {...register('Descripcion', {
                      required: 'description obligatorio',
                    })}
                  />
                </div>
                {errors.Descripcion && (
                  <p className='text-red-600'>{errors.Descripcion?.message}</p>
                )}
              </div>

              {/*  Categoria */}

              <div className='flex  flex-col '>
                <div className='flex gap-2 justify-around p-2 items-center'>
                  <label htmlFor='description' className='w-[30%]'>
                    Categoria
                  </label>
                  <select
                    {...register('Categoria', {
                      required: 'selección obligatorio',
                    })}
                  >
                    {categorias.map((cat) => {
                      return (
                        <option key={cat._id} value={cat.categoria}>
                          {cat.categoria}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {errors.Categoria && (
                  <p className='text-red-600'>{errors.Categoria?.message}</p>
                )}
              </div>
              {/*  PrecioCompra */}
              <div className='flex  flex-col '>
                <div className='flex gap-2 justify-around p-2'>
                  <label htmlFor='PrecioCompra' className='w-[30%]'>
                    PrecioCompra
                  </label>
                  <input
                    className='w-[30%] pr-8 focus:outline-none '
                    type='number'
                    id='precioCompra'
                    min={1}
                    {...register('PrecioCompra', {
                      required: 'precio compra obligatorio',
                      min: 'valor minimo 1',
                    })}
                  />
                </div>
                {errors.PrecioCompra && (
                  <p className='text-red-600'>{errors.PrecioCompra?.message}</p>
                )}
              </div>

              {/*  PrecioVenta */}
              <div className='flex  flex-col '>
                <div className='flex gap-2 justify-around p-2'>
                  <label htmlFor='precioVenta' className='w-[30%]'>
                    PrecioVenta
                  </label>
                  <input
                    className='w-[30%] pr-8 focus:outline-none '
                    type='number'
                    id='precioVenta'
                    min={1}
                    {...register('PrecioVenta', {
                      required: 'precio venta obligatorio',
                      min: 'valor minimo 1',
                    })}
                  />
                </div>
                {errors.PrecioVenta && (
                  <p className='text-red-600'>{errors.PrecioVenta?.message}</p>
                )}
              </div>

              {/*  Stock */}
              <div className='flex  flex-col '>
                <div className='flex gap-2 justify-around p-2'>
                  <label htmlFor='stock' className='w-[30%]'>
                    Stock
                  </label>
                  <input
                    className='w-[30%] pr-8 focus:outline-none'
                    type='number'
                    id='stock'
                    {...register('Stock', {
                      required: 'stock obligatorio',
                    })}
                  />
                </div>
                {errors.Stock && (
                  <p className='text-red-600'>{errors.Stock?.message}</p>
                )}
              </div>

              {/*  img */}
              {/* <div className='flex  flex-col '>
                <div className='flex gap-2 justify-around p-2'>
                  <input
                    className='w-[100%] pr-8 focus:outline-none'
                    name='products'
                    type='file'
                    id='img'
                    {...register('img')}
                  />
                </div>
                {errors.img && (
                  <p className='text-red-600'>{errors.img?.message}</p>
                )}
              </div> */}

              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-3sm px-5 py-2.5 mr-2 mb-2'
              >
                Editar
              </button>
              <div
                onClick={() => {
                  setOpenModalEdit((prev) => !prev);
                }}
                className='text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-3sm px-5 py-2.5 mr-2 mb-2'
              >
                Cancelar
              </div>
              {error && <p className='text-red-600 text-3sm'>{error}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export const EditImgProducts = ({ img, Descripcion }) => {
  const [open] = useState(false);
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <img
        className=' h-10 w-14'
        src={`http://127.0.0.1:9000/productos/images/${img}`}
        alt={Descripcion}
        // onClick={() => setOpen((prev) => !prev)}
      />
      {/*  img */}
      {open && (
        <div className='flex absolute flex-col top-0 let-0 '>
          <div className='flex gap-2 justify-around p-2'>
            <input
              className='w-[100%] pr-8 focus:outline-none'
              name='products'
              type='file'
              id='img'
              {...register('img')}
            />
          </div>
          {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
        </div>
      )}
    </>
  );
};
