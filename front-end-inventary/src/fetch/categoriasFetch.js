export const categoriasFetch = async (filterData, catergory) => {
  const url = 'http://127.0.0.1:9000/categorias';

  const res = await fetch(url);
  const data = await res.json();
  return data.Alldata;
};
