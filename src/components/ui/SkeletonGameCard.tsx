const SkeletonGameCard = () => {
  return (
    <div className='w-full h-[362px] overflow-hidden border dark:border-slate-600 rounded-lg  is-loading'>
      <div className='h-44 dark:bg-slate-700  bg-slate-200 '></div>
      <div className='flex flex-col gap-4 px-4 p-5 h-[186px] dark:bg-slate-800 bg-slate-50'>
        <h2 className='h-6 mr-32 bg-slate-200 dark:bg-slate-700 rounded-lg'></h2>
        <p className='mr-10  h-3 bg-slate-200 dark:bg-slate-700 rounded-lg'></p>
        <p className='mr-16 h-3 bg-slate-200 dark:bg-slate-700 rounded-lg'></p>
        <p className='h-5  mr-48 bg-slate-200 dark:bg-slate-700 rounded-lg'></p>
        <p className='h-3 mr-40  bg-slate-200 dark:bg-slate-700 rounded-lg'></p>
      </div>
    </div>
  );
};

export default SkeletonGameCard;
