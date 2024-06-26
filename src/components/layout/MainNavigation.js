import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
  const favouritecontext=useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/New-Meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/Favourites">My Favourites
            <span className={classes.badge}>{favouritecontext.totalfavourites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;