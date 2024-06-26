import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage(){
    const favouritecontext= useContext(FavouritesContext);

    let content;
    if(favouritecontext.totalfavourites===0){
        content=<p>You have not added any favourite. Start adding!</p>
    }
    else{
        content=<MeetupList meetups={favouritecontext.favourites}/>
    }
    return (<div>
        <h1>My Favourites</h1>
        {content}
        </div>);
}
export default FavouritesPage;