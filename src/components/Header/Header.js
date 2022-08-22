import { SiGmail } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import Button from "../Button/Button";
import Logo from "../../assets/images/logo.jpg";
import classes from "./Header.module.css";

const Header = () => {
  const space = "   ";
  return (
    <div className={classes.header}>
      <section className={classes.s1}>
        <div className={classes.logo}>
          <img src={Logo} />
        </div>
      </section>
      <section className={classes.s2}>
        <div className={classes.info}>
          <div>
            <p>
              <IoIosCall /> +91 - 7302010247 (for Reservation)
            </p>
            <p>
              <SiGmail /> {space}dp2012div@gmail.com
            </p>
          </div>
        </div>
        <div className={classes.navigation}>
          <section className={classes.s2_1}>
            <p>Home</p>

            <p>The Resort </p>

            <p>Rooms</p>

            <p>Packages</p>

            <p>Dining</p>

            <p>Tariff</p>

            <p>Gallery</p>

            <p>Contact Us</p>

            <p>Explore Rishikesh</p>

            <p>Reservation</p>

            <p>Pay Now</p>
          </section>
          <section className={classes.s2_2}>
            <Button style={classes.btn} type="button">
              Book Now
            </Button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Header;
