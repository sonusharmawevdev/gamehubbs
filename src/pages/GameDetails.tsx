import { Link, useParams } from "react-router-dom";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import { SingleGame } from "../services/interface";
import { GiWingedEmblem } from "react-icons/gi";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { MdWindow } from "react-icons/md";
import { BsBrowserFirefox } from "react-icons/bs";
import { ErrorCard } from "../components";

const GameDetails = () => {
  const [game, setGame] = useState<SingleGame>();
  const [error, setError] = useState("");
  const param = useParams();

  // api did not provide any game rating that's why using Random Number
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    apiClient
      .get("/game", { params: { id: param.id } })
      .then((res) => {
        setGame(res.data);
      })
      .catch((error) => {
        {
          setError(error);
        }
      });
  }, [param.id]);

  if (error) return <ErrorCard errorMessage={error} />;

  return (
    <div className='bg-zinc-900 w-full h-full'>
      <div
        style={{ backgroundImage: `url(${game?.screenshots[0].image})` }}
        className='max-w-[2440px] m-auto bg-cover bg-center relative '
      >
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/80 to-black/90 '></div>
        <div className='max-w-[1200px] m-auto px-4 py-8 flex flex-col items-start sm:flex-row gap-2 sm:gap-8 '>
          {/* left */}
          <div className='w-full h-full sm:w-[450px] sm:sticky top-20 left-0 right-0 z-10'>
            <img
              src={game?.thumbnail}
              alt={game?.title}
              className='w-full h-full object-cover'
            />
            <div className='mt-5 flex  items-center gap-3 '>
              <span className='px-4 py-2 transition-all duration-100 ease-linear bg-gray-700 text-white uppercase hover:bg-gray-600'>
                Free
              </span>
              <Link
                to={`${game?.game_url}`}
                target='_blank'
                className='w-full px-4 py-2 transition-all duration-100 ease-linear bg-indigo-500 hover:bg-indigo-600 text-white uppercase text-center'
              >
                Play Now
              </Link>
            </div>
            <div className='mt-10'>
              <div
                className='w-36 h-36 rounded-full flex items-center justify-center    m-auto
                  before:relative before:w-32 before:h-32 before:rounded-full before:bg-gray-700'
                style={{
                  background: `conic-gradient(#6366f1 ${
                    randomNumber >= 67 ? randomNumber * 3.6 : 67 * 3.6
                  }deg, #f3edfb 0deg)`,
                }}
              >
                <span className='absolute text-3xl font-bold text-indigo-500 '>
                  {randomNumber >= 67 ? randomNumber : 67}%
                </span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='w-full h-full z-20 text-white'>
            <p className='text-sm capitalize'>
              <Link to='/'>Home</Link> &gt; {game?.title.toLowerCase()}
            </p>
            <h1 className='capitalize py-2 font-bold sm:text-4xl text-2xl '>
              {game?.title.toLowerCase()}
            </h1>
            <p className='text-xl font-light'>{game?.short_description}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-5 gap-5'>
              <div className=''>
                <div className='flex items-center gap-2 my-3 '>
                  <GiWingedEmblem size={20} />
                  <span className='font-thin text-lg'>Very Positive</span>
                </div>
                <div>
                  <p>7Member Ratings</p>
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <h2 className='text-2xl font-bold pb-3'>
                Additional Information
              </h2>
              <div className='text-gray-400 '>
                <PiWarningCircleDuotone
                  szie={20}
                  className='m-0 inline mr-1'
                />
                <p className='inline'>
                  Please note this free-to-play game may or may not offer
                  optional in-game purchases.
                </p>
              </div>
              <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-5 mt-5'>
                <div>
                  <h4 className='text-sm text-gray-400'>Title</h4>
                  <p className='text-lg text-gray-200'>{game?.title}</p>
                </div>
                <div>
                  <h4 className='text-sm text-gray-400'>Developer</h4>
                  <p className='text-lg text-gray-200'>{game?.developer}</p>
                </div>
                <div>
                  <h4 className='text-sm text-gray-400'> Publisher</h4>
                  <p className='text-lg text-gray-200'>{game?.publisher}</p>
                </div>
                <div>
                  <h4 className='text-sm text-gray-400'>Release Date</h4>
                  <p className='text-lg text-gray-200'>{game?.release_date}</p>
                </div>
                <div>
                  <h4 className='text-sm text-gray-400'>Genre</h4>
                  <p className='text-lg text-gray-200'>{game?.genre}</p>
                </div>
                <div>
                  <h4 className='text-sm text-gray-400'>Platform</h4>
                  <p className='flex items-center gap-2  text-gray-200'>
                    {game?.platform === "Windows" ? (
                      <MdWindow />
                    ) : (
                      <BsBrowserFirefox />
                    )}
                    {game?.platform}
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <h2 className='text-2xl font-bold'>Overwatch 2 Screenshots</h2>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6 '>
                {game?.screenshots.map((item) => (
                  <div
                    key={item.id}
                    className='relative'
                  >
                    <img
                      src={item.image}
                      alt={game.title}
                      className='w-full h-36 object-cover '
                    />
                    <div className='absolute left-0 top-0 w-full h-full bg-black/40'></div>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-10'>
              <h2 className='text-2xl font-bold pb-3'>
                Minimum System Requirements{" "}
                <span className='font-light'>( {game?.platform} )</span>
              </h2>
              <div className='grid sm:grid-cols-2  gap-5 mt-3'>
                <div>
                  <h4 className='text-sm text-gray-400'>Graphics</h4>
                  <p className='text-lg text-gray-200'>
                    {game?.minimum_system_requirements?.graphics
                      ? game?.minimum_system_requirements?.graphics
                      : "NA"}
                  </p>
                </div>
                <div>
                  <h4 className='text-sm text-gray-400'>Memory</h4>
                  <p className='text-lg text-gray-200'>
                    {game?.minimum_system_requirements?.memory
                      ? game?.minimum_system_requirements?.memory
                      : "NA"}
                  </p>
                </div>
                <div>
                  <h4 className='text-sm text-gray-400'>OS</h4>
                  <p className='text-lg text-gray-200'>
                    {game?.minimum_system_requirements?.os
                      ? game?.minimum_system_requirements?.os
                      : "NA"}
                  </p>
                </div>
                <div>
                  <h4 className='text-sm text-gray-400'>Processor</h4>
                  <p className='text-lg text-gray-200'>
                    {game?.minimum_system_requirements?.processor
                      ? game?.minimum_system_requirements?.processor
                      : "NA"}
                  </p>
                </div>

                <div>
                  <h4 className='text-sm text-gray-400'>Storage</h4>
                  <p className='text-lg text-gray-200'>
                    {game?.minimum_system_requirements?.storage
                      ? game?.minimum_system_requirements?.storage
                      : "NA"}
                  </p>
                </div>
              </div>
            </div>
            <div className='border-t border-gray-700 mt-10'>
              <p className='text-xs text-gray-400 pt-5'>
                All material on this page is copyrighted by ©Activision Blizzard
                and their respective licensors. All other trademarks are the
                property of their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
