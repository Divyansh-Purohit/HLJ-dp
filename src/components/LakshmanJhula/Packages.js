import classes from "./LakshmanJhula.module.css";
import Spa from "../../assets/images/Spa2.jpg";
import Rafting from "../../assets/images/rafting.webp";
import Yoga from "../../assets/images/yoga.jpeg";
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
        WHAT'S NEW
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
        Explore Our Packages
      </p>
      <br />
      <br />
      <div className={classes.exploreSection}>
        <section className={classes.sec}>
          <img src={Yoga} style={{ height: "400px", objectFit: "cover" }} />
          <div style={{ padding: "30px" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "black",
                fontFamily: "Playfair Display",
              }}
            >
              Yoga Tour Packages
            </p>
            <br />
            <br />
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
              Divine Resort offers 200 Hour, 300 Hour and 500 Hour Hatha and
              Ashtanga Yoga Teacher Training Courses in Rishikesh.
            </p>
          </div>
          <br />
          <footer>
            <p
              style={{
                fontSize: "16px",
                color: "brown",
                float: "left",
                marginLeft: "7%",
              }}
            >
              READ MORE
            </p>
          </footer>
        </section>
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
              Spa Rejuvenation
            </p>
            <br />
            <br />
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
              Get 07 Nights 08 Days Divine Spa Rejuvention Package with
              exclusive Spa Therapies (Executive Room With Ganga View).
            </p>
          </div>
          <br />
          <footer>
            <p
              style={{
                fontSize: "16px",
                color: "brown",
                float: "left",
                marginLeft: "7%",
              }}
            >
              READ MORE
            </p>
          </footer>
        </section>
        <section className={classes.sec}>
          <img src={Rafting} style={{ height: "400px", objectFit: "cover" }} />
          <div style={{ padding: "30px" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "black",
                fontFamily: "Playfair Display",
              }}
            >
              Adventure Tour Packages
            </p>
            <br />
            <br />
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
              Get 02 Nights 03 Days River Rafting Package. Adventure in the
              Ganges (Executive Room With Ganga View @ INR 27999)
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
              READ MORE
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Explore;
