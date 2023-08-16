import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { Game } from "../../services/interface";
import {
  ErrorCard,
  GameCard,
  Pagination,
  SkeletonGameCard,
} from "../../components";
import { Genre } from "../../utils/filter";
import FilterCard from "./FilterCard";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [stateTitle, setStateTitle] = useState("All");
  const skelton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const gamePerPage = 39;

  const scrollTo = window.scrollTo(0, 0);
  // get current games
  const indexOfLastGame = currentPage * gamePerPage;
  const indexOfFirstGame = indexOfLastGame - gamePerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollTo;
  };
  // getPlatform
  const getPlatform = async (platform: string) => {
    setLoading(true);
    apiClient
      .get("/games", { params: platform !== "" && { platform: platform } })
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((error) => {
        {
          setError(error);
          setLoading(false);
        }
      });
    setStateTitle(platform);
    setCurrentPage(1);
  };
  // getSortBy
  const getSortBy = async (sortby: string) => {
    setLoading(true);
    apiClient
      .get("/games", {
        params: sortby !== "" && { "sort-by": sortby.toLowerCase() },
      })
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((error) => {
        {
          setError(error);
          setLoading(false);
        }
      });
    setStateTitle(sortby);
    setCurrentPage(1);
    scrollTo;
  };
  // get Genre
  const getCategory = async (genre: string) => {
    setLoading(true);
    apiClient
      .get("/games", { params: genre !== "" && { category: genre } })
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((error) => {
        {
          setError(error);
          setLoading(false);
        }
      });
    setStateTitle(genre);
    setCurrentPage(1);
  };

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/games")
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((error) => {
        {
          setError(error.message);
          setLoading(false);
        }
      });
  }, []);

  if (error) return <ErrorCard errorMessage={error} />;

  return (
    <section className='max-w-[1200px] m-auto px-4 mt-8 relative'>
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 relative'>
        <div className='min-w-[200px] hidden sm:flex flex-col sticky top-20 left-0 h-screen '>
          <div className=' flex flex-col gap-2'>
            <p className='dark:text-white text-slate-900  font-semibold dark:bg-slate-800 bg-slate-50 rounded-sm px-3 py-1'>
              Genre
            </p>
            {Genre.map((genre) => (
              <button
                key={genre.id}
                onClick={() => getCategory(genre.params.toLowerCase())}
                className='transition-all dark:text-white text-black 
                duration-150 ease-in px-3 py-1 text-start text-sm
                 hover:bg-indigo-500  hover:text-white '
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
        <div className='w-full '>
          <FilterCard
            getPlatform={getPlatform}
            getCategory={getCategory}
            getSortBy={getSortBy}
          />
          <div className='flex justify-between items-center mb-3'>
            <p className='capitalize  text-2xl font-bold dark:text-white text-slate-700 my-4'>
              {stateTitle}
            </p>
            <p className='text-xs   bg-indigo-100 dark:bg-slate-800 dark:text-white text-indigo-500 px-3 p-1 rounded-full'>
              Page No : {currentPage}
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {loading && skelton.map((sktn) => <SkeletonGameCard key={sktn} />)}
            {currentGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
              />
            ))}
          </div>
          <Pagination
            gamePerPage={gamePerPage}
            totleGames={games.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
