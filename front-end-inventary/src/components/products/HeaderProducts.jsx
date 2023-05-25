import { IconSearch } from '@tabler/icons-react';
import { Button } from '../../componentsUtils/Button';
import { useRef } from 'react';
import { useCategorias } from '../../hooks/useCategorias';

export const HeaderProducts = ({
  setFilterData,
  setCatergory,
  setOpenForm,
}) => {
  const { categorias, isLoading } = useCategorias();
  const debounceFilter = useRef();
  const debounceCategory = useRef();

  const onQueryChangedFilter = (e) => {
    if (debounceFilter.current) {
      clearTimeout(debounceFilter.current);
    }
    debounceFilter.current = setTimeout(() => {
      setFilterData(e.target.value);
    }, 300);
  };

  const onQueryChangedCategory = (e) => {
    if (debounceCategory.current) {
      clearTimeout(debounceCategory.current);
    }
    debounceCategory.current = setTimeout(() => {
      setCatergory(e.target.value);
    }, 300);
  };
  return (
    <div className='flex justify-between px-6 mt-3  pb-3 border-b-2 '>
      <div className='w-4/5 flex  items-center'>
        <div className='flex justify-center items-center gap-5 text-black bg-blue-700 px-4 p-2 rounded-lg'>
          <IconSearch className='text-white h-8 w-8' />
          <input
            type='text'
            onChange={onQueryChangedFilter}
            className='bg-white pl-2 w-full'
          />
          <select onChange={onQueryChangedCategory} className='text-center'>
            <option value='all'>todos</option>

            {!isLoading &&
              categorias.map((cat) => {
                return (
                  <option key={cat._id} value={cat.categoria}>
                    {cat.categoria}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div>
        <Button className='p-2 ' open={setOpenForm}>
          Nuevo Producto
        </Button>
      </div>
    </div>
  );
};
