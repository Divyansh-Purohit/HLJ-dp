import classes from "./LakshmanJhula.module.css";

const Contact = () => {
  return (
    <div className={classes.contactContainer}>
      <section className={classes.s1C}>
        <p className={classes.heading}>Contact</p>
        <ul>
          <li>
            <span>Address:</span> Tapovan Laxman Jhula, Rishikesh
          </li>
          <li>
            <span>Phone:</span> +91 135 2442128
          </li>
          <li>
            <span>Mobile:</span> +91 - 7900307777 (for Reservation)
          </li>
          <li>
            <span>Email:</span> sales@divineresort.com
          </li>
          <li>
            <span>Mobile No:</span> +91 - 8171957799
          </li>
        </ul>
      </section>
      <section className={classes.s2C}>
        <p className={classes.heading}>QuickLinks</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Reservation Policy</li>
          <li>Cancelation & Refund Policy</li>
          <li>Terms of use</li>
        </ul>
      </section>
      <section className={classes.s3C}>
        <p className={classes.heading}>Things To Do</p>
        <ul>
          <li>Wellness & Spa</li>
          <li>Restaurants and Cafe</li>
          <li>River Side Banquet</li>
          <li>Ayurveda Treatment</li>
        </ul>
      </section>
      <section className={classes.s4C}>
        <p className={classes.heading}>Rooms and Suites</p>
        <ul>
          <li>Executive Room</li>
          <li>Family Executive Room</li>
          <li>Family Executive Suite</li>
          <li>Maharaja Suite</li>
          <li>Maharani Suite</li>
          <li>Royal Room</li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
