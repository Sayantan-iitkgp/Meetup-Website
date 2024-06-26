import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalfavourites: 0,
  AddFavourite: (favouriteMeetup) => {},
  RemoveFavourite: (meetupId) => {},
  ItemisFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavourite(favouriteMeetup) {
    setUserFavourites((lastFavourites) => {
      return lastFavourites.concat(favouriteMeetup);
    });
  }
  function removeFavourite(removeId) {
    setUserFavourites((lastFavourites) => {
      return lastFavourites.filter((meetup) => meetup.id !== removeId);
    });
  }
  function itemisFavourite(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalfavourites: userFavourites.length,
    AddFavourite: addFavourite,
    RemoveFavourite: removeFavourite,
    ItemisFavourite: itemisFavourite,
  };

  return (
    <FavouritesContext.Provider value={context}>{props.children}</FavouritesContext.Provider>
  );
}

export default FavouritesContext;
