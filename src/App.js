import { Route, Routes } from "react-router-dom";

import AllmeetupsPage from "./pages/Allmeetups";
import FavouritesPage from "./pages/Favourites";
import NewmeetupPage from "./pages/Newmeetup";
 //import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout.js";
function App() {
  return (
    <div>
     <Layout>
      <Routes>
        <Route path="/" element={<AllmeetupsPage />} />
        <Route path="/New-Meetup" element={<NewmeetupPage />} />
        <Route path="/Favourites" element={<FavouritesPage />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
