import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiArrowRight, HiColorSwatch } from "../../utils/icons";
import { themeLink, onWindowMatch } from "../../utils/theme";
const Header = () => {
  const localStorageMatch = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "system";
  const [theme, setTheme] = useState(localStorageMatch);

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <header className='dark:bg-slate-800 bg-slate-50 sticky z-50 top-0 left-0 right-0 shadow-sm'>
      <div className='max-w-[1200px] m-auto  px-4  h-16   flex justify-between items-center '>
        <Link
          to='/'
          className='dark:text-white text-black  text-2xl font-bold'
        >
          Game <span className='text-indigo-500 '>Hubb</span>
        </Link>
        <div className='flex items-center gap-4'>
          <button className='block sm:hidden  dark:text-white text-black'>
            <FiSearch size={18} />
          </button>
          <form
            action=''
            className='relative hidden sm:block '
          >
            <button className='absolute top-[7px] left-3 dark:text-white text-black'>
              <FiSearch size={18} />
            </button>
            <input
              type='search'
              className='outline-none py-1 px-9 rounded-full border dark:border-slate-600 dark:bg-slate-700  dark:text-white text-black'
            />
          </form>

          <Link
            to='/login'
            className='flex items-center gap-1 transition-all duration-100 whitespace-nowrap  ease-linear  bg-indigo-500 hover:bg-indigo-400 px-5 py-2 rounded-full text-white font-semibold text-sm '
          >
            Sign In <FiArrowRight size={16} />
          </Link>

          <div className='relative group'>
            <button className='dark:text-white dark:bg-slate-700  rounded-full p-[2px] flex justify-center items-center w-8 h-8'>
              <HiColorSwatch size={18} />
            </button>
            <div className='hidden group-hover:block w-60 p-3 absolute -right-2 top-8 '>
              <div className='border dark:border-slate-700 dark:bg-slate-800 bg-slate-100 rounded-lg '>
                <div className='flex justify-center items-center gap-8 p-4 dark:text-slate-100'>
                  {themeLink.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setTheme(opt.text)}
                      className={`${theme === opt.text && " text-indigo-500"}`}
                    >
                      <opt.icon size={22} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
