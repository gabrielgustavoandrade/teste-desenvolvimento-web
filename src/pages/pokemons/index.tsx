import { useEffect, useState } from "react";
import { findPaginate } from "../../api/pokemon";
import TablePagination from "../../components/pagination";

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    find(page);
  }, [page]);

  const find = async (page: number) => {
    isLoading(true);
    const result = await findPaginate(page);
    setTotalPages(result.result[0].totalpage);
    setPage(page);
    setPokemons(result.result);
    isLoading(false);
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-4 grid-rows-3 gap-4 m-24 mb-10">
        {pokemons.map((element) => {
          return (
            <div
              key={element.id}
              className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 max-w-xs"
            >
              <div>
                <p className="mb-2 text-2xl font-medium text-gray-900">
                  {element.name}
                </p>
                <div className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                    {element.type1}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                    {element.type2}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                    {element.weather1}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                    {element.weather2}
                  </span>
                  <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                    ATK: {element.atk}
                  </span>
                  <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                    DEF: {element.def}
                  </span>
                  <span className="inline-block bg-pink-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                    STA: {element.sta}
                  </span>
                  <span className="inline-block bg-black-400 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 ">
                    TOTAL: {element.sta + element.atk + element.def}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <TablePagination
          loading={loading}
          paginationInfo={{ page, totalPages }}
          onChangePage={(value: number) => {
            find(value);
          }}
          siblingCount={1}
        />
      </div>
    </div>
  );
};

export default Pokemons;
