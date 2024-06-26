import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card.js";
import { useRef } from "react";
function NewMeetupForm(props) {
  const Inputtitleref = useRef();
  const Inputimageref = useRef();
  const Inputaddressref = useRef();
  const Inputdescriptionref = useRef();

  function handelsubmit(event) {
    event.preventDefault();

    const enteredtitle = Inputtitleref.current.value;
    const enteredimage = Inputimageref.current.value;
    const enteredaddress = Inputaddressref.current.value;
    const entereddescription = Inputdescriptionref.current.value;

    const meetupdata = {
      title: enteredtitle,
      image: enteredimage,
      address: enteredaddress,
      description: entereddescription,
    };

    // console.log(meetupdata);
    props.onAddmeetup(meetupdata);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handelsubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={Inputtitleref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={Inputimageref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" ref={Inputaddressref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={Inputdescriptionref}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
