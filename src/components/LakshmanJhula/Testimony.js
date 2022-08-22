import { useState, useEffect } from "react";
import { MdStarRate } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestimonyContent1 from "./TestimonyContent1";
import TestimonyContent2 from "./TestimonyContent2";
import classes from "./LakshmanJhula.module.css";
const Testimony = () => {
  const [test, setTest] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setTest(!test);
    }, 5000);
  }, [test]);
  const onClickHandler = () => {
    setTest(!test);
  };

  return (
    <div className={classes.testimony}>
      <div className={classes.stars}>
        <p style={{ color: "white", textAlign: "center", fontSize: "28px" }}>
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={classes.num_test}>
        <div className={classes.arrow}>
          <IoIosArrowBack
            style={{ color: "white", fontSize: "48px" }}
            onClick={onClickHandler}
          />
        </div>
        {test === 1 ? <TestimonyContent1 /> : <TestimonyContent2 />}
        <div className={classes.arrow}>
          <IoIosArrowForward
            style={{ color: "white", fontSize: "48px", float: "right" }}
            onClick={onClickHandler}
          />
        </div>
      </div>
      <div className={classes.person}>
        <p>MR. MOHAN CHANDRA</p>
      </div>
    </div>
  );
};

export default Testimony;
