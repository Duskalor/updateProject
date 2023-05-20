export const Button = ({ children, open }) => {
  return (
    <button
      type='button'
      onClick={() => {
        open((prev) => !prev);
      }}
      className='text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-3sm px-5 py-2.5 mr-2 mb-2'
    >
      {children}
    </button>
  );
};
