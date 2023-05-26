import { useState } from 'react';
import { ProductsTable } from './ProductsTable';
import { HeaderProducts } from './HeaderProducts';
import { useGetProducts } from '../../hooks/useProductos';

const defaulValue = 'all';
export const ProductsLayout = () => {
  const [filterData, setFilterData] = useState('');
  const [catergory, setCatergory] = useState(defaulValue);
  const [openForm, setOpenForm] = useState(false);

  const { products, isLoading, isError } = useGetProducts(
    filterData,
    catergory
  );
  return (
    <div className='pl-[130px]'>
      <h2 className='text-3xl  py-5 bg-white'>Products</h2>

      {/*  buscar y new Button */}
      <HeaderProducts
        setFilterData={setFilterData}
        setCatergory={setCatergory}
        setOpenForm={setOpenForm}
      />
      {/* La tabla de los productos */}
      <ProductsTable
        isLoading={isLoading}
        products={products}
        setOpenForm={setOpenForm}
        openForm={openForm}
        isError={isError}
      />
    </div>
  );
};
