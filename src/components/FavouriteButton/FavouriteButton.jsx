import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./styles.css";
import { selectFavAction } from "../../api/useraction";

function FavouriteButton(props){
    const dispatch = useDispatch()
    const[select,setSelect] = useState( props.favorite);
    // const isLiked = useSelector(
    //     (state) => state.reducers.selectFav.favorite
    //   );
    console.log("favorite button is pressed",props.favorite);
    console.log("favorite add is pressed",props.dataId);
    const selectFavorite = () => {
        setSelect(!select)

        dispatch(selectFavAction(props.dataId))


    }
    // (!(props.favorite) && props.favorite ) 
    // console.log("there is in the fav file..select",isLiked);
    return(
        <div className="favourites-box" onClick={selectFavorite}>
            {select ?<img src="./images/heart-fill.svg" className="hearts" alt="heart"/>:<img src="./images/heart-line.svg" className="hearts" alt="heart" />}
        </div>
    );
}
export default FavouriteButton;
