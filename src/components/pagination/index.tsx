import { usePagination, DOTS } from "./usePagination";

interface TablePaginationProps {
  loading: boolean;
  paginationInfo: {
    page: number;
    totalPages: number;
  };
  siblingCount: number;

  onChangePage: (value: number) => void;
}

const TablePagination = ({
  loading,
  paginationInfo,
  onChangePage,
  siblingCount,
}: TablePaginationProps) => {
  
  const paginationRange = usePagination({
    paginationInfo,
    siblingCount
  })
 
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between rounded-lg border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          {paginationRange
            ? paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                  return <span className="text-gray-500 font-medium">...</span>;
                }

                return (
                  <button
                    key={index}
                    className={
                      "relative inline-flex items-center px-4 py-2 text-sm font-medium focus:outline-none " +
                      (pageNumber === paginationInfo.page
                        ? "bg-indigo-50 text-indigo-600 "
                        : "bg-white text-gray-500 hover:bg-gray-50 ")
                    }
                    disabled={loading}
                    onClick={() => onChangePage(Number(pageNumber))}
                  >
                    {pageNumber}
                  </button>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
