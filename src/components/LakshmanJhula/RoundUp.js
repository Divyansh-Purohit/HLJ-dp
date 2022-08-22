import { WiCloudyWindy } from "react-icons/wi";
import {
  ImFacebook,
  ImTumblr,
  ImYoutube,
  ImGoogle,
  ImTwitter,
  ImInstagram,
} from "react-icons/im";
import classes from "./LakshmanJhula.module.css";

const RoundUp = () => {
  return (
    <div className={classes.roundupC}>
      <section className={classes.s1_rc}>
        <p>Current Weather</p>
        <br />
        <br />
        <div>
          <p className={classes.addn}>Rishikesh, India (Minimum Temperature)</p>
          <p className={classes.tempDisplay}>
            <WiCloudyWindy />
            36 °C
          </p>
        </div>
      </section>
      <section className={classes.s2_rc}>
        <p>Stay Connected</p>
        <br />
        <br />
        <div>
          <p className={classes.addn}>Follow us on social media platforms</p>
          <br />
          <p className={classes.social}>
            {/* <a href="https://www.facebook.com/pages/category/Travel-Company/Divine-Resort-Rishikesh-193243767408369/"> */}
            <ImFacebook />
            {/* </a>{" "} */}
            <ImTwitter /> <ImGoogle /> <ImYoutube /> <ImInstagram />{" "}
            <ImTumblr />
          </p>
          <p></p>
        </div>
      </section>
      <section className={classes.s3_rc}>
        <p>Awards and Recognition</p>
        <br />
        <br />
      </section>
    </div>
  );
};

export default RoundUp;
