import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import Card from "../ui/Card.js";
import FavouritesContext from "../../store/favourites-context.js";

function MeetupItem(props) {
  const favouritecontext = useContext(FavouritesContext);

  const itemisfavourite= favouritecontext.ItemisFavourite(props.id);

  function FavouriteStatusHandler(){
     if(itemisfavourite){
      favouritecontext.RemoveFavourite(props.id);
     }
     else{
      favouritecontext.AddFavourite({
        id : props.id,
        title : props.title,
        address :props.address,
        description : props.description,
        image : props.image,   
      });
     }
  }
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={FavouriteStatusHandler}>{itemisfavourite ?"Remove from Favourite" :"Add to Favourite"}</button>
        </div>
      </li>
    </Card>
  );
}
export default MeetupItem;
