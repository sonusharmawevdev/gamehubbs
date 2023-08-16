import { Genre, Platform, SortBy } from "../../utils/filter";

interface Props {
  getPlatform: (platform: string) => void;
  getCategory: (genre: string) => void;
  getSortBy: (soryby: string) => void;
}
const FilterCard = ({ getPlatform, getCategory, getSortBy }: Props) => {
  return (
    <div className=' max-w-[1200px]'>
      <div className='flex flex-wrap gap-5'>
        <select
          className=' border border-slate-300
          dark:border-slate-600 p-1  dark:text-slate-50 text-black 
           focus:outline-none bg-slate-50 dark:bg-slate-800 rounded-sm'
          onChange={(e) => getPlatform(e.target.value)}
        >
          {Platform.map((platform) => (
            <option
              value={platform.params}
              key={platform.id}
            >
              {platform.name}
            </option>
          ))}
        </select>

        <select
          className='border border-slate-300 dark:border-slate-600  p-1 dark:text-slate-50 text-black   focus:outline-none bg-slate-50 dark:bg-slate-800 rounded-sm'
          onChange={(e) => getCategory(e.target.value)}
        >
          {Genre.map((genre) => (
            <option
              value={genre.params}
              key={genre.id}
            >
              {genre.name}
            </option>
          ))}
        </select>

        <select
          className='border border-slate-300 dark:border-slate-600  p-1 dark:text-slate-50 text-black   focus:outline-none bg-slate-50 dark:bg-slate-800 rounded-sm'
          onChange={(e) => getSortBy(e.target.value)}
        >
          {SortBy.map((sortby) => (
            <option
              value={sortby.params}
              key={sortby.id}
            >
              {sortby.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterCard;
