interface Props {
  gamePerPage: number;
  totleGames: number;
  currentPage: number;
  paginate: (number: number) => void;
}

const Pagination = ({
  gamePerPage,
  totleGames,
  paginate,
  currentPage,
}: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totleGames / gamePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='my-10 flex items-center gap-3 justify-center py-5'>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`w-7 h-7 text-xs rounded-full ${
            currentPage === number
              ? "bg-indigo-500 text-white"
              : "bg-indigo-100 dark:bg-slate-800 text-indigo-400 dark:text-white"
          } `}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
