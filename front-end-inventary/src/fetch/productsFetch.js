import { toast } from 'sonner';

export const productFetch = async (filterData, catergory) => {
  const url =
    filterData === ''
      ? `http://127.0.0.1:9000/productos?category=${catergory}`
      : `http://127.0.0.1:9000/productos?category=${catergory}&filter=${filterData}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.Alldata;
};

export const productPostFetch = async (data) => {
  const formData = new FormData();
  // Agrega los demás datos del formulario al objeto FormData si los hay
  formData.append('Codigo', data.Codigo);
  formData.append('Descripcion', data.Descripcion);
  formData.append('Categoria', data.Categoria);
  formData.append('PrecioCompra', data.PrecioCompra);
  formData.append('PrecioVenta', data.PrecioVenta);
  formData.append('Stock', data.Stock);
  formData.append('products', data.img[0]); // Agrega la imagen al objeto FormData
  try {
    const res = await fetch('http://127.0.0.1:9000/productos/create/', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      toast.error('error al Agregar un producto');

      throw new Error('Failed to post product.');
    } else {
      toast.success('producto Agregado Correctamente');
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProducts = async (id) => {
  try {
    const res = await fetch(`http://127.0.0.1:9000/productos/delete/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      toast.error('error al eliminar un producto');

      throw new Error('Failed to delete product.');
    } else {
      toast.success('producto eliminado correctamente');
    }
  } catch (err) {
    console.log(err);
  }
};

export const productEditFetch = async (data) => {
  try {
    const res = await fetch(
      `http://127.0.0.1:9000/productos/update/${data._id}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    if (!res.ok) {
      toast.error('error al editar un producto');

      throw new Error('Failed to post product.');
    } else {
      toast.success('producto Editado Correctamente');
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const handleUpdateimg = ({ id, newImg }) => {
  const formImg = new FormData();
  formImg.append('products', newImg);
  return fetch(`http://localhost:9000/productos/img/${id}`, {
    method: 'PUT',
    body: formImg,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('error al modificar la imagen');
      }
    })
    .then((data) => data)

    .catch((e) => console.error(e));
};
