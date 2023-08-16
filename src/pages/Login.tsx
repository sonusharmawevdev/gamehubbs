import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail, RiLockPasswordFill } from "../utils/icons";
const Login = () => {
  return (
    <div className='max-w-[1200px]  h-screen m-auto px-4'>
      <div className='max-w-[600px] m-auto  my-16'>
        <form
          action=''
          className='flex flex-col gap-6 dark:bg-slate-800 bg-slate-50 p-16  shadow-sm rounded-xl border dark:border-slate-600'
          autoComplete='off'
        >
          <p className='text-2xl font-bold dark:text-white text-black text-center mb-3 '>
            Sign In
          </p>
          <span className='py-3 border-t dark:border-slate-700 '></span>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='email'
              className='dark:text-white text-slate-800 text-sm'
            >
              Email
            </label>
            <div className='relative'>
              <input
                required
                type='text'
                name='email'
                id='email'
                className='w-full px-8 py-2 outline-none border-2 border-slate-500 dark:text-white text-black rounded-md dark:bg-slate-700'
              />
              <span className='absolute left-3 top-3 text-slate-400'>
                <MdOutlineAlternateEmail size={16} />
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='password'
              className='dark:text-white text-slate-800 text-sm'
            >
              Password
            </label>
            <div className='relative'>
              <input
                type='password'
                name='password'
                id='password'
                className='w-full px-8 py-2 outline-none border-2 border-slate-500 dark:text-white text-black rounded-md dark:bg-slate-700'
              />
              <span className='absolute left-3 top-3 text-slate-400 '>
                <RiLockPasswordFill size={16} />
              </span>
            </div>
          </div>
          <div className='mt-1'>
            <Link
              to={"/login"}
              className='dark:text-white text-black'
            >
              Forgot password ?
            </Link>
          </div>
          <div className='mt-3'>
            <input
              disabled
              type='submit'
              value='Logn In'
              className='transition-all duration-75 ease-linear px-5 py-2 w-full text-white  bg-indigo-500 font-bold text-lg rounded-md cursor-pointer hover:bg-indigo-600 '
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
