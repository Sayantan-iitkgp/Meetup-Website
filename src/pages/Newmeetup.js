import NewMeetupForm from "../components/meetups/NewMeetupForm.js";
import { useNavigate } from "react-router-dom";
function NewmeetupPage() {
  const navigate = useNavigate();

  function Meetuphandeler(meetupdata) {
    fetch(
      "https://meetupwebsiteexpire-default-rtdb.firebaseio.com/Meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupdata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        navigate("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddmeetup={Meetuphandeler} />
    </section>
  );
}
export default NewmeetupPage;
