import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteProducts, productFetch } from '../../fetch/productsFetch';
import { useState } from 'react';
import { ProductsTable } from './ProductsTable';
import { HeaderProducts } from './HeaderProducts';

export const ProductsLayout = () => {
  const [filterData, setFilterData] = useState('');
  const [catergory, setCatergory] = useState('all');
  const [openForm, setOpenForm] = useState(false);

  const client = useQueryClient();

  const {
    data: products,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['products', filterData, catergory],
    queryFn: () => productFetch(filterData, catergory),
  });

  const { mutate } = useMutation({
    mutationFn: deleteProducts,
    onSuccess: () => client.invalidateQueries(['products']),
  });

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
        products={products}
        isFetching={isFetching}
        mutate={mutate}
        setOpenForm={setOpenForm}
        openForm={openForm}
        isError={isError}
      />
    </div>
  );
};
