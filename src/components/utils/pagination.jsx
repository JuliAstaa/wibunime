const Pagination = ({ setPage, page, maxPage }) => {
  let twoPrev;
  let twoNext;
  page > 2 ? (twoPrev = [page - 2, page - 1]) : null;
  page != maxPage ? (twoNext = [page + 1, page + 2]) : null;

  const handleLastPage = () => {
    setPage(maxPage);
  };

  const handleFisrtPage = () => {
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleSpecificPage = (value) => {
    setPage(value);
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col justify-center gap-2 w-full m-auto items-center lg:flex-row ">
        {page == 1 ? null : (
          <button
            className="text-slate-400  w-fit p-2 rounded-lg bg-slate-800"
            onClick={handlePrevPage}
          >
            Prev
          </button>
        )}
        <div className="flex gap-2">
          {page < 2 ? null : (
            <button
              className="text-slate-400 w-[3rem] p-2 rounded-lg bg-slate-800 "
              onClick={handleFisrtPage}
            >
              1
            </button>
          )}

          {twoPrev
            ? twoPrev?.map((page, index) => {
                return page == 1 ? null : (
                  <button
                    key={index}
                    className="text-slate-400 w-[3rem]  p-2 rounded-lg bg-slate-800"
                    onClick={() => handleSpecificPage(page)}
                  >
                    {page}
                  </button>
                );
              })
            : null}

          <button className="text-slate-50 w-[3rem]  p-2 rounded-lg bg-sky-500">
            {page}
          </button>
          {twoNext?.map((page, index) => {
            return (
              <button
                key={index}
                className="text-slate-400 w-[3rem]  p-2 rounded-lg bg-slate-800"
                onClick={() => handleSpecificPage(page)}
              >
                {page}
              </button>
            );
          })}
          {page == maxPage ? null : (
            <button
              className="text-slate-400 w-[3rem]  p-2 rounded-lg bg-slate-800 "
              onClick={handleLastPage}
            >
              {maxPage}
            </button>
          )}
        </div>

        {page == maxPage ? null : (
          <button
            className="text-slate-400  w-fiw-[3rem]t p-2 rounded-lg bg-slate-800"
            onClick={handleNextPage}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
