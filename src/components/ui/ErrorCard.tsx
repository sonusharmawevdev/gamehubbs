import { Link } from "react-router-dom";

interface Props {
  errorMessage: string;
}
const ErrorCard = ({ errorMessage }: Props) => {
  return (
    <div className='max-w-[1200px] m-auto px-4 h-screen'>
      <div className='flex justify-center items-center w-full h-[400px] '>
        <div className='max-w-lg px-4 text-center'>
          <h1 className='text-6xl font-bold text-indigo-500'>404</h1>
          <p className='mt-4 text-xl text-gray-700'>{errorMessage}</p>
          <Link
            to='/'
            className='mt-4 inline-block px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg'
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
