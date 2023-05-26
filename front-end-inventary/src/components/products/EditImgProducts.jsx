import { useState } from 'react';
import { buttonStyle } from '../../utils/buttonStyle';
import { useUpdateImg } from '../../hooks/useProductos';

export const EditImgProducts = ({ id, img, Descripcion }) => {
  const [imgUpdate] = useUpdateImg();
  const [open, setOpen] = useState(false);
  const [preView, setPreView] = useState(null);
  const [newImg, setnewImg] = useState(null);

  const imgsubmit = () => {
    imgUpdate({ newImg, id });
    setOpen((prev) => !prev);
  };

  const handleImageChange = (e) => {
    const newimg = URL.createObjectURL(e.target.files[0]);
    setPreView(newimg);
    setnewImg(e.target.files[0]);
  };

  return (
    <>
      <img
        className=' h-10 w-14'
        src={`http://127.0.0.1:9000/productos/images/${img}`}
        alt={Descripcion}
        onClick={() => {
          setPreView(null);
          setOpen((prev) => !prev);
        }}
      />
      {/*  img */}
      {open && (
        <div
          onClick={() => setOpen((prev) => !prev)}
          className='flex justify-center  items-center absolute flex-col top-0 left-0 w-screen h-screen  bg-colors-black-rgba backdrop-blur-[1px]'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=' flex justify-center gap-6 items-center p-2 h-[100px]  bg-white w-[600px] rounded-xl'
          >
            {preView !== null && (
              <img
                className=' h-10 w-14'
                src={preView}
                alt='Previsualización'
              />
            )}
            <input
              onChange={handleImageChange}
              accept='image/*'
              className=' pr-8 focus:outline-none'
              name='products'
              type='file'
              id='img'
            />
            <button
              className={
                preView === null
                  ? `${buttonStyle} bg-slate-500 hover:bg-slate-500`
                  : buttonStyle
              }
              onClick={imgsubmit}
              disabled={preView === null}
            >
              subir
            </button>
          </div>
        </div>
      )}
    </>
  );
};
