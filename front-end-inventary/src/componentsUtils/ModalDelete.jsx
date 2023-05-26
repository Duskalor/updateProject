import { IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { buttonStyle } from '../utils/buttonStyle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProducts } from '../fetch/productsFetch';

export const ModalDelete = ({ text, id }) => {
  const client = useQueryClient();

  const [openModelDelete, setopenModelDelete] = useState(false);
  const { mutate } = useMutation({
    mutationFn: deleteProducts,
    onSuccess: () => client.invalidateQueries(['products']),
  });
  return (
    <div>
      <button
        className={buttonStyle}
        onClick={() => setopenModelDelete(!openModelDelete)}
      >
        <IconTrash />
      </button>
      {openModelDelete && (
        <div
          className='w-full h-full flex justify-center items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-leslie '
          onClick={() => setopenModelDelete(!openModelDelete)}
        >
          <div
            className=' text-3xl  bg-white border-black border-[1px] text-black font-bold w-[600px] h-[300px] flex flex-col justify-around items-center rounded-lg'
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Confirmar acción</h3>
            <p className='text-slate-800'>{text}</p>
            <div className='flex gap-3 justify-around w-full'>
              <button
                className='bg-red-700 py-2 px-3 rounded-lg text-white'
                onClick={() => mutate(id)}
              >
                Confirmar
              </button>
              <button
                className='bg-blue-700 py-2 px-3 rounded-lg text-white'
                onClick={() => setopenModelDelete(!openModelDelete)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
