import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FavouritesContextProvider} from "./store/favourites-context.js"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavouritesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavouritesContextProvider>
);
