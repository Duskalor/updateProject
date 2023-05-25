import { useQuery } from '@tanstack/react-query';
import { categoriasFetch } from '../fetch/categoriasFetch';

export const useCategorias = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['categoria'],
    queryFn: categoriasFetch,
  });
  return {
    categorias: data,
    isLoading,
  };
};
