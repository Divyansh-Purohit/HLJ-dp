import Mah from "../../assets/images/royal.jpg";
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
          <p className={classes.header}>Royal Room</p>
          <br />
          <br />
          <p style={{ color: "black", fontSize: "18px", paddingLeft: "60px" }}>
            from{" "}
            <span style={{ color: "burlywood", fontSize: "28px" }}>
              INR 17,999.00
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
            Royal Room offer top-notch living spaces, complimentary services and
            amenities like LCD TV, high speed Wi-Fi connectivity, electronic
            safe Adapter, Air conditioning, Fan, Hand sanitizer, Sleep comfort,
            items Slipper, ironing facilities, laundry services Socket near the
            bed Soundproofing and Wake-up service.
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
