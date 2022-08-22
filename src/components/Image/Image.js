import { useState, useEffect } from "react";
import Transition from "react-transition-group/Transition";
import { IMAGES } from "../../assets/images/images.js";
import image from "../../assets/images/download5.jpg";
import ExtraInfo from "./ExtraInfo";
import Slider from "./Slider";
import classes from "./Image.module.css";

const Image = () => {
  const [currImage, setCurrImage] = useState(IMAGES[0]);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       let id = currImage.id;
  //       id = id + 1;
  //       if (id == 4) {
  //         id = 0;
  //       }
  //       const image = IMAGES.filter((image) => image.id === id);
  //       setCurrImage(image);
  //     }, 3000);
  //   }, [currImage]);
  //   let path = "../../assets/images/";
  //   path = path + `${currImage.path}`;
  return (
    <div className={classes.imgContainer}>
      <img src={image} />
      {/* <ExtraInfo />; */}
      {/* <Transition in="true" timeout={300} className={classes.t}>
        {(state) => {
          {
            state === "entering" ? (
              <>
                
              </>
            ) : null;
          }
        }}
      </Transition> */}
      <Slider />
    </div>
  );
};

export default Image;
