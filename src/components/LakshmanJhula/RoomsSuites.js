import { useState } from "react";
import classes from "./LakshmanJhula.module.css";
import Maharaja from "./Maharaja";
import MaharaniSuite from "./MaharaniSuite";
import FamilyExecutiveSuite from "./FamilyExecutiveSuite";
import FamilyExecutiveRoom from "./FamilyExecutiveRoom";
import RoyalRoom from "./RoyalRoom";
import ExecutiveRoomGangaView from "./ExecutiveRoomGangaView";

import Mah from "../../assets/images/maha.jpg";
import Royal from "../../assets/images/royal.jpg";
import Exe from "../../assets/images/exe.jpg";
import Mahr from "../../assets/images/maharani.jpg";
import Fam from "../../assets/images/mahr.jpg";

const RoomsSuites = () => {
  const [room, setRoom] = useState("Maharaja");
  return (
    <div className={classes.rns}>
      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "brown",
          //   fontWeight: "bold",
          fontFamily: "Open Sans",
        }}
      >
        THE PLEASURE OF LUXURY
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
        Rooms and Suites
      </p>
      <br />
      <br />
      <div className={classes.roomsList}>
        <p onClick={() => setRoom("Maharaja")}>MAHARAJA SUITE</p>{" "}
        <p onClick={() => setRoom("FamilySuite")}>FAMILY EXECUTIVE SUITE</p>{" "}
        <p onClick={() => setRoom("FamilyRoom")}>FAMILY EXECUTIVE ROOM</p>{" "}
        <p onClick={() => setRoom("ExecutiveGanga")}>
          EXECUTIVE ROOM GANGA VIEW
        </p>{" "}
        <p onClick={() => setRoom("Maharani")}>MAHARANI SUITE</p>{" "}
        <p onClick={() => setRoom("Royal")}>ROYAL ROOM</p>
      </div>
      <br />
      <br />
      <div className={classes.Img_C}>
        <div>
          {room === "Maharaja" && <Maharaja />}
          {room === "FamilySuite" && <FamilyExecutiveSuite />}
          {room === "FamilyRoom" && <FamilyExecutiveRoom />}
          {room === "ExecutiveGanga" && <ExecutiveRoomGangaView />}
          {room === "Maharani" && <MaharaniSuite />}
          {room === "Royal" && <RoyalRoom />}
        </div>
      </div>
      <div className={classes.summary}>
        <section
          style={{ opacity: room === "Maharaja" ? 1 : 0.7 }}
          className={classes.sect_Info}
          onClick={() => setRoom("Maharaja")}
        >
          <img className={classes.smallImage} src={Mah} />
          <p className={classes.p_info}>Maharaja Suite</p>
        </section>
        <section
          style={{ opacity: room === "FamilySuite" ? 1 : 0.7 }}
          className={classes.sect_Info}
          onClick={() => setRoom("FamilySuite")}
        >
          <img className={classes.smallImage} src={Fam} />
          <p className={classes.p_info}>Family Executive Suite</p>
        </section>
        <section
          style={{ opacity: room === "FamilyRoom" ? 1 : 0.7 }}
          className={classes.sect_Info}
          onClick={() => setRoom("FamilyRoom")}
        >
          <img className={classes.smallImage} src={Fam} />
          <p className={classes.p_info}>Family Executive Room</p>
        </section>
        <section
          style={{ opacity: room === "ExecutiveGanga" ? 1 : 0.7 }}
          className={classes.sect_Info}
          onClick={() => setRoom("ExecutiveGanga")}
        >
          <img className={classes.smallImage} src={Exe} />
          <p className={classes.p_info}>Executive Room Ganga View</p>
        </section>
        <section
          style={{ opacity: room === "Maharani" ? 1 : 0.7 }}
          className={classes.sect_Info}
          onClick={() => setRoom("Maharani")}
        >
          <img className={classes.smallImage} src={Mahr} />
          <p className={classes.p_info}>Maharani Suite</p>
        </section>
        <section
          style={{ opacity: room === "Royal" ? 1 : 0.7 }}
          className={classes.sect_Info}
          onClick={() => setRoom("Royal")}
        >
          <img className={classes.smallImage} src={Royal} />
          <p className={classes.p_info}>Royal Room</p>
        </section>
      </div>
    </div>
  );
};

export default RoomsSuites;
