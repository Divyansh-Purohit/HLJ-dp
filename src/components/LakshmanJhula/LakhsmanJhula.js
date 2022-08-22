import LJ from "../../assets/images/LJ_ROOM.webp";
import classes from "./LakshmanJhula.module.css";
const LakshmanJhula = () => {
  return (
    <div className={classes.container}>
      <section className={classes.s1}>
        <p className={classes.welcome}>
          WELCOME TO LAKSHMAN JHULA DIVINE RESORT & SPA
        </p>
        <p className={classes.vision}>A New Vision of Luxury</p>
        <p className={classes.content}>
          Lying amidst the foothills of the Himalayas, Laxman Jhula Divine
          Resort in Rishikesh, India overlooks the holy Ganges thus presenting a
          completely mesmerizing spectacle to its visitors.
        </p>
        <br></br>
        <p className={classes.content}>
          Giving the view of screen, Turquoise Ganga. An awesome beauty of
          breathtaking, sun washed river complements the resort to provide you a
          real freshness cool and fresh air originating from mesmerizing Ganga
          refreshing your body and soul. Ravishing view of sunsets and an
          enchanting sound of water of holy Ganga, refreshes the surroundings
          with its melody.
        </p>
      </section>
      <section className={classes.s2}>
        {<img className={classes.img} src={LJ} />}
      </section>
    </div>
  );
};

export default LakshmanJhula;
