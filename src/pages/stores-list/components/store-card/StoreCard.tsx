import PurpleArrowLeft from "../../assets/purple-arrow-left.svg";
import Divider from "../../../../ui-components/divider/Divider.tsx";
import {useNavigate} from "react-router-dom";
import {IResultsMovies} from "../../store-list-interface.ts";
import {ImageBaseUrl} from "../../../../config/constants.ts";
import NoImageAvailable from "../../../../assets/images/No_Image_Available.jpg";


interface IProps {
  movie: IResultsMovies
}

const StoreCard = (props: IProps) => {

  const {movie} = props
  const navigate = useNavigate()

  return (
    <div className={`flex flex-col gap-2 p-3 h-[600px] rounded-2xl  border border-text-02 `}>
      <img src={movie?.poster_path ? ImageBaseUrl + 'w400' + movie?.poster_path : NoImageAvailable} alt={movie?.title}
           className={`rounded-2xl max-h-[400px] min-h-[400px] object-contain`}/>
      <div className={`flex justify-between items-center gap-2`}>
        <div className={`text-18-700-30 text-text-01`}>{movie?.title}</div>
        <div className={`flex gap-1 items-center cursor-pointer`}
             onClick={() => navigate(`/stores-list/${movie?.id}`)}>
          <div className={`text-text-01 text-12-400-20 text-nowrap`}>read more</div>
          <img src={PurpleArrowLeft} alt="arrow left icon" className={`w-4 h-4 rotate-180`}/>
        </div>
      </div>

      <Divider className={`min-h-[1px]`}/>

      <div className={`flex gap-2 overflow-hidden`}>
        {<div
          className={`rounded-2xl py-1 px-2 bg-bg-01 text-text-01 text-10-400-16 `}>{movie?.overview}
        </div>}
      </div>
    </div>
  );
};
export default StoreCard;
