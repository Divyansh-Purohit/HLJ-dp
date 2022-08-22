import Mah from "../../assets/images/maharani.jpg";
import Button from "../Button/Button";
import classes from "./Maharaja.module.css";
const Maharaja = () => {
  return (
    <div className={classes.sect_con}>
      <section className={classes.sect_1}>
        <img src={Mah} className={classes.sect_img} />
      </section>
      <section className={classes.sect_1}>
        <div>
          <br />
          <p className={classes.header}>Maharani Suite</p>
          <br />
          <br />
          <p style={{ color: "black", fontSize: "18px", paddingLeft: "60px" }}>
            from{" "}
            <span style={{ color: "burlywood", fontSize: "28px" }}>
              INR 22,999.00
            </span>
            /night
          </p>
          <br />
          <br />
          <p
            style={{
              width: "80%",
              color: "darkgray",
              textAlign: "justify",
              paddingLeft: "60px",
              fontWeight: "bold",
              lineHeight: "24px",
              fontSize: "14px",
            }}
          >
            Maharani suite offer comfortable living experiences along with
            expansive views and stunning decor, these rooms exude elegance and
            warmth. These well-appointed, inviting rooms are equipped with
            modern amenities to make the stay convenient and cosy and round the
            clock room services for our guests.
          </p>
          <br />
          <br />
          <div className={classes.btn_C}>
            <Button type="button" style={classes.btn}>
              DETAILS
            </Button>
            <Button type="button" style={classes.btn_book}>
              BOOK NOW
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maharaja;
