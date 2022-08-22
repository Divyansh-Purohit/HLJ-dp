import Mah from "../../assets/images/exe.jpg";
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
          <p className={classes.header}>Family Executive Room</p>
          <br />
          <br />
          <p style={{ color: "black", fontSize: "18px", paddingLeft: "60px" }}>
            from{" "}
            <span style={{ color: "burlywood", fontSize: "28px" }}>
              INR 15,999.00
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
            The comfortable and spacious Family Executive Rooms with all the
            modern amenities, 2 King Size beds, LED TV with DTH Connection,
            Sofa, WiFi, and a view of the Ganges from the room.
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
