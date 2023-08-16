import { Link } from "react-router-dom";
import { Game } from "../../services/interface";
import { MdWindow, BsBrowserFirefox } from "../../utils/icons";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Link
      to={`/game/${game.id}`}
      className='w-full h-full  bg-gary-100 shadow-lg hover:bg-slate-100
      dark:hover:bg-slate-800 overflow-hidden border border-gray-300 dark:border-gray-800
        hover:border-indigo-500/20 rounded-lg'
    >
      <img
        src={game.thumbnail}
        alt={game.title}
        className='w-full h-44 object-cover '
      />
      <div className='p-4'>
        <h3 className='dark:text-slate-200 text-gray-800 font-bold'>
          {game.title}
        </h3>
        <p className='my-1 text-sm text-gray-700 dark:text-gray-400 '>
          {game.short_description.slice(0, 75)}
        </p>
        <div className='flex justify-between items-center py-3'>
          <p className=' text-[10px] px-3 py-1 rounded-full font-bold capitalize bg-slate-200 dark:bg-slate-800 text-gray-800 dark:text-gray-300  '>
            {game.genre.toLocaleLowerCase()}
          </p>
          <p className='flex items-center gap-1 text-sm text-gray-700 dark:text-gray-400'>
            {game.platform === "PC (Windows)" ? (
              <MdWindow />
            ) : (
              <BsBrowserFirefox />
            )}
            {game.platform}
          </p>
        </div>
        <p className='text-xs py-2 text-gray-700 dark:text-gray-400'>
          Release Date : {game.release_date}
        </p>
      </div>
    </Link>
  );
};

export default GameCard;
