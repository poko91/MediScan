const SearchBar = ({ day }) => {
  return (
    <div className="mt-8 sm:flex sm:justify-between gap-1">
      {/* search input */}
      <div className="w-full max-w-md bg-black rounded-full flex items-center">
        <input className="flex-grow py-2 px-4 bg-black outline-none text-sm text-white placeholder-gray-400 rounded-full" type="text" placeholder="Search article using PMID" />
        <button className="px-4 border-l-2 border-gray-400 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <div className="hidden sm:block">
        <div className="flex gap-1">
          {/* days filter */}
          <button className="py-2 grid place-items-center relative items-center w-24 h-full rounded-full focus -within:shadow-lg bg-black overflow-hidden">
            <p className="text-sm text-gray-400 text-center">Last {day} day</p>
          </button>

          {/* include animals */}
          <button className="py-2 grid place-items-center relative items-center w-36 h-full rounded-full focus -within:shadow-lg bg-black overflow-hidden text-sm text-gray-400 text-center hover:bg-accent hover:text-white transition ease-out duration-200">
            <p>Include animals</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
