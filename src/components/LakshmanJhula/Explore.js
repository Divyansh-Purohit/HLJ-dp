import classes from "./LakshmanJhula.module.css";
import Spa from "../../assets/images/spa.jpg";
import Kitchen from "../../assets/images/kitchen.jpg";
import RiverSide from "../../assets/images/riverside.jpg";
const Explore = () => {
  return (
    <div className={classes.exploreDiv}>
      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "brown",
          //   fontWeight: "bold",
          fontFamily: "Open Sans",
        }}
      >
        EXPLORE
      </p>
      <br></br>
      <p
        style={{
          textAlign: "center",
          fontSize: "48px",
          color: "black",
          fontFamily: "Playfair Display",
        }}
      >
        The Resort
      </p>
      <br />
      <br />
      <div className={classes.exploreContent}>
        <p>
          Your magical vacation in India starts right at Laxman Jhula Divine
          Resort which is the ideal place to combine
        </p>
        <p>
          business with vacation for the entire family. As a guest at one of the
          best hotels in the country, you will
        </p>
        <p>experience the traditional Himalayan hospitality with excellence.</p>
      </div>
      <br />
      <br />
      <div className={classes.exploreSection}>
        <section className={classes.sec}>
          <img src={Spa} style={{ height: "400px", objectFit: "cover" }} />
          <div style={{ padding: "30px" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "black",
                fontFamily: "Playfair Display",
              }}
            >
              Wellness & Spa
            </p>
            <p
              style={{
                paddingTop: "20px",
                textAlign: "justify",
                fontSize: "18px",
                color: "black",
                lineHeight: "24px",
                fontFamily: "Open Sans",
              }}
            >
              This is a place where you can enjoy the beauty of natural greenery
              and the sounds of nature and the river. Here you can experience
              the traditions and feelings of "ayurveda" the science of life.
            </p>
          </div>
          <footer>
            <p
              style={{
                fontSize: "16px",
                color: "brown",
                float: "left",
                marginLeft: "7%",
              }}
            >
              EXPLORE MORE
            </p>
          </footer>
        </section>
        <section className={classes.sec}>
          <img src={Kitchen} style={{ height: "400px", objectFit: "cover" }} />
          <div style={{ padding: "30px" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "black",
                fontFamily: "Playfair Display",
              }}
            >
              Restaurant & Cafe
            </p>
            <p
              style={{
                paddingTop: "20px",
                textAlign: "justify",
                fontSize: "18px",
                color: "black",
                lineHeight: "24px",
                fontFamily: "Open Sans",
              }}
            >
              The Laxman Jhula Divine Resort boasts of having a multi-cuisine
              restaurant that offers mouth-watering Indian, Chinese as well as
              Continental Cuisines. Besides, a 24 hour Coffee Shop is also known
              to be a favorite place to hang out.
            </p>
          </div>
          <footer>
            <p
              style={{
                fontSize: "16px",
                color: "brown",
                float: "left",
                marginLeft: "7%",
              }}
            >
              EXPLORE MORE
            </p>
          </footer>
        </section>
        <section className={classes.sec}>
          <img
            src={RiverSide}
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div style={{ padding: "30px" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "black",
                fontFamily: "Playfair Display",
              }}
            >
              River Side Banquet
            </p>
            <p
              style={{
                paddingTop: "20px",
                textAlign: "justify",
                fontSize: "18px",
                color: "black",
                lineHeight: "24px",
                fontFamily: "Open Sans",
              }}
            >
              Divine Resort is the perfect site for a dream destination wedding.
              ceremonies can be held under the open skies overlooking the
              mountains, while a gentle zephyr from the holy river rises to
              bless the couple.
            </p>
          </div>
          <footer>
            <p
              style={{
                fontSize: "16px",
                color: "brown",
                float: "left",
                marginLeft: "7%",
              }}
            >
              EXPLORE MORE
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Explore;
