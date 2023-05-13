export interface product {
  Codigo: string;
  Descripcion: string;
  Categoria: string;
  PrecioCompra: number;
  PrecioVenta: number;
  Stock: number;
  img?: string;
}

export interface productsWithId extends product {
  id: string;
}
