import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  handleUpdateimg,
  productEditFetch,
  productFetch,
  productPostFetch,
} from '../fetch/productsFetch';

export const useEditProductos = () => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: productEditFetch,
    onSuccess: () => {
      client.invalidateQueries(['products']);
    },
  });

  return { mutate };
};

export const useCreateProducto = () => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: productPostFetch,
    onSuccess: () => {
      client.invalidateQueries(['products']);
    },
  });

  return { mutate };
};

export const useGetProducts = (filterData, catergory) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products', filterData, catergory],
    queryFn: () => productFetch(filterData, catergory),
    // keepPreviousData: true,
    // refetchOnWindowFocus: false,
  });

  return { products, isLoading, isError };
};

export const useUpdateImg = () => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: handleUpdateimg,

    onSuccess: () => {
      client.invalidateQueries(['products']);
    },
  });

  return [mutate];
};
