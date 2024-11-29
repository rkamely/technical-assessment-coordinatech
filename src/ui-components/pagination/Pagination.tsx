import React from "react";
import {ArrowLeftPagination} from "../../assets/icons/ArrowLeftPagination.tsx";
import {ArrowRightPagination} from "../../assets/icons/ArrowRightPagination.tsx";


interface IProps {
  page: number
  maxPage: number
  setPage: React.Dispatch<number>
}


function Pagination(props: IProps) {
  const {page, maxPage, setPage} = props
  const handleArrowPagination = (type: string) => {
    if (type === 'next' && page < maxPage) {
      setPage(page + 1)
    } else if (type === 'back' && page > 1) {
      setPage(page - 1)
    }
  }

  return (

    <nav role="navigation" aria-label="Pagination Navigation" className={`mt-auto `}>

      <ul className="flex items-center justify-center gap-2 md:gap-3 list-none w-full ">

        <li onClick={() => handleArrowPagination("back")}
            className={`bg-gray-04 border border-solid border-text-02 rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12
                 flex justify-center items-center cursor-pointer select-none`}>
          <ArrowLeftPagination/>
        </li>

        <li
          onClick={() => setPage(1)}
          className={`${page === 1 ? "bg-bg-05 text-primary-purple border-[1.5px] md:border-[3px] border-solid border-primary-purple text-Body1-Bold-lineHeight " : "text-text-01"} 
              bg-gray-04 rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer select-none bg-bg-05 `}>
          {1}
        </li>

        {
          (page < 3 || maxPage < 7) && <>
            {
              maxPage > 1 && <li onClick={() => setPage(2)}
                                 className={` ${page === 2 ? "text-primary-purple border-[1.5px] md:border-[3px] border-solid border-primary-purple text-Body1-Bold-lineHeight" : "text-text-01"}
                     bg-gray-04  rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer select-none bg-bg-05`}>
                {2}
              </li>
            }
            {
              maxPage > 2 && <li onClick={() => setPage(3)}
                                 className={`${page === 3 ? "text-primary-purple border-[1.5px] md:border-[3px] border-solid border-primary-purple text-Body1-Bold-lineHeight" : "text-text-01"} bg-gray-04
                      rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer select-none bg-bg-05`}>
                {3}
              </li>
            }

          </>
        }

        {
          maxPage > 6 && page > 3 && <li
            className={`text-text-01 bg-gray-04 rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center
                 items-center cursor-pointer select-none bg-bg-05`}>
            ...
          </li>
        }

        {maxPage > 6 && maxPage - 1 > page && page > 2 &&
          <>
            < li onClick={() => setPage(page - 1)}
                 className={`text-text-01 bg-gray-04  rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center 
                     items-center cursor-pointer select-none bg-bg-05`}>
              {page - 1}
            </li>
            <li onClick={() => setPage(page)}
                className={`text-primary-purple border-[1.5px] md:border-[3px] border-solid border-primary-purple bg-gray-04 text-Body1-Bold-lineHeight  rounded-lg md:rounded-2xl
                     w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer select-none bg-bg-05`}>
              {page}
            </li>
            <li onClick={() => setPage(page + 1)}
                className={`text-text-01 bg-gray-04  rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center
                    items-center cursor-pointer select-none bg-bg-05`}>
              {page + 1}
            </li>
          </>
        }

        {
          maxPage > 6 && page < maxPage - 2 && <li
            className={`text-text-01 bg-gray-04  rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer select-none bg-bg-05`}>
            ...
          </li>
        }


        {
          (page > maxPage - 2 || maxPage < 7) && <>
            {
              maxPage > 5 && <li onClick={() => setPage(maxPage - 2)}
                                 className={`${page === maxPage - 2 ? "text-primary-purple border-[1.5px] md:border-[3px] border-solid border-primary-purple text-Body1-Bold-lineHeight" : "text-text-01"}
                     bg-gray-04  rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer select-none bg-bg-05`}>
                {maxPage - 2}
              </li>
            }

            {
              maxPage > 4 && <li onClick={() => setPage(maxPage - 1)}
                                 className={`${page === maxPage - 1 ? "text-primary-purple border-[1.5px] md:border-[3px] border-solid border-primary-purple text-Body1-Bold-lineHeight" : "text-text-01"}
                     bg-gray-04  rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer select-none bg-bg-05`}>
                {maxPage - 1}
              </li>
            }
          </>
        }

        {
          maxPage > 3 && <li onClick={() => setPage(maxPage)}
                             className={`${page === maxPage ? "text-primary-purple border-[1.5px] md:border-[3px] border-solid border-primary-purple text-Body1-Bold-lineHeight" : "text-text-01"}
                 bg-gray-04 rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 flex justify-center items-center cursor-pointer select-none bg-bg-05`}>
            {maxPage}
          </li>
        }


        <li onClick={() => handleArrowPagination("next")}
            className={`bg-gray-04 border border-solid border-text-02 rounded-lg md:rounded-2xl w-8 md:w-12 h-8 md:h-12 
                flex justify-center items-center cursor-pointer select-none`}>
          <ArrowRightPagination/>
        </li>

      </ul>

    </nav>


  )
}

export default Pagination
