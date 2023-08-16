import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='dark:bg-slate-950 bg-slate-50  border-t dark:border-slate-800 z-40'>
      <div className='max-w-[1200px] m-auto px-4'>
        <div className='py-8 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <Link
              to='/'
              className='dark:text-white text-black text-2xl sm:text-4xl font-bold'
            >
              Game <span className='text-indigo-500 '>Hubb</span>
            </Link>
          </div>
          <div>
            <ul className='flex  flex-col gap-4 dark:text-white text-black  text-md font-semibold'>
              <li>About</li>
              <li>API</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul className='flex  flex-col gap-4 dark:text-white text-black text-md font-semibold'>
              <li>Help/FAQ</li>
              <li>Support & Bugs</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <ul className='flex  flex-col gap-4 dark:text-white text-black text-md font-semibold'>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
