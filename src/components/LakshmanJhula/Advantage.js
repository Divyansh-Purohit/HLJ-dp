import {
  IoWallet,
  IoWifiSharp,
  IoCalendar,
  IoTimerOutline,
  IoNotificationsSharp,
  IoPeopleSharp,
} from "react-icons/io5";
import classes from "./LakshmanJhula.module.css";
const Advantage = () => {
  return (
    <div className={classes.advContainer}>
      <br />
      <br />
      <br />
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontFamily: "Open Sans",
          color: "burlywood",
        }}
      >
        WHY CHOOSE DIVINE RESORT
      </p>
      <br />
      <br />
      <p
        style={{
          textAlign: "center",
          fontSize: "48px",
          fontFamily: "Playfair Display",
          color: "white",
        }}
      >
        The Advantages
      </p>
      <br />
      <br />
      <br />
      <div className={classes.grid}>
        <div className={classes.c1}>
          <div>
            <IoWallet className={classes.icon} />
          </div>
          <div>
            <p className={classes.boxTitle}>Best Price Guarantee</p>
            <p className={classes.boxDescription}>
              It begins here. When you book your stay directly on an official
              Four Seasons website, you'll be guaranteed the lowest rate
              possible for your stay and the most flexible cancellation terms.
            </p>
          </div>
        </div>
        <div className={classes.c1}>
          <div>
            <IoCalendar className={classes.icon} />
          </div>
          <div>
            <p className={classes.boxTitle}>Book Now To Secure Availability</p>
            <p className={classes.boxDescription}>
              Book directly to secure your availability. You have access to our
              dedicated reservations specialists to help with your bookings and
              best services throughout your stay.
            </p>
          </div>
        </div>
        <div className={classes.c1}>
          <div>
            <IoTimerOutline className={classes.icon} />
          </div>
          <div>
            <p className={classes.boxTitle}>Late Check-out on Request</p>
            <p className={classes.boxDescription}>
              Spend a few more hours together enjoying your room by getting late
              check-out at our hotel. All this on special request.
            </p>
          </div>
        </div>
        <div className={classes.c1}>
          <div>
            <IoWifiSharp className={classes.icon} />
          </div>
          <div>
            <p className={classes.boxTitle}>Free Wi-Fi Available </p>
            <p className={classes.boxDescription}>
              Laxman Jhula Divine Resort offers the best facilities among all
              other Resorts in Rishikesh. Free WiFi is available 24 Hrs at the
              resort for its esteemed guests to connect with the outside world.
            </p>
          </div>
        </div>
        <div className={classes.c1}>
          <div>
            <IoPeopleSharp className={classes.icon} />
          </div>
          <div>
            <p className={classes.boxTitle}>Meetings & Special Events</p>
            <p className={classes.boxDescription}>
              For those moments of liesure, or when business has to be discussed
              outside the confines of a corporate environment, this is the
              place. We promise you, the experience will be worth repeating,
              over and over again.
            </p>
          </div>
        </div>
        <div className={classes.c1}>
          <div>
            <IoNotificationsSharp className={classes.icon} />
          </div>
          <div>
            <p className={classes.boxTitle}>Prompt & Efficient Services</p>
            <p className={classes.boxDescription}>
              Laxman Jhula Divine Resort, offers you a sustained tradition of
              elegance and service. The promptness and efficiency of our
              services, will always meet your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
