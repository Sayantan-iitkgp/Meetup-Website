import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";



function AllmeetupsPage() {
  const [loading, loadinghandeler] = useState(true);
  const [storedmeetups, setstoredmeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://meetupwebsiteexpire-default-rtdb.firebaseio.com/Meetups.json"
    )
      .then((a) => {
        return a.json();
      })
      .then((b) => {
        const x = [];
        for (const key in b) {
          const y = {
            id: key,
            ...b[key],
          };
          x.push(y);
        }
        loadinghandeler(false);
        setstoredmeetups(x);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <div>
        <h1>All Meetups</h1>
        <MeetupList meetups={storedmeetups} />
      </div>
    );
  }
}
export default AllmeetupsPage;
