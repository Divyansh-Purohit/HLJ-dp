import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { MONTH, WEEKDAY } from "./DateFormatter";
import Button from "../Button/Button";
import classes from "./Info.module.css";

const Info = () => {
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [showArrivalDatePicker, setShowArrivalDatePicker] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [showDepartureDatePicker, setShowDepartureDatePicker] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const onArrivalClick = () => {
    setShowArrivalDatePicker(!showArrivalDatePicker);
  };

  const onDepartureClick = () => {
    setShowDepartureDatePicker(!showDepartureDatePicker);
  };

  return (
    <div className={classes.infoContainer}>
      <section className={classes.s1}>
        <div>
          <p className={classes.title}>ARRIVAL DATE</p>
          <div className={classes.dateContainer}>
            <div className={classes.date}>
              <p>{arrivalDate.getDate()}</p>
            </div>
            <div className={classes.mn_yr}>
              <p>
                {MONTH[arrivalDate.getMonth()]}, {arrivalDate.getFullYear()}
              </p>
              <hr />
              <p style={{ fontSize: "18px" }}>
                {WEEKDAY[arrivalDate.getDay()]}
              </p>
            </div>
            <div>
              <IoIosArrowDown
                className={classes.hover}
                onClick={onArrivalClick}
              />
            </div>
          </div>
        </div>

        {showArrivalDatePicker && (
          <div className={classes.arrivalDate}>
            <DatePicker
              className={classes.dateP}
              selected={arrivalDate}
              onChange={(date) => {
                setArrivalDate(date);
                setShowArrivalDatePicker(false);

                console.log(arrivalDate);
              }}
              onClickOutside={() => setShowArrivalDatePicker(false)}
            />
          </div>
        )}
      </section>
      <section className={classes.s2}>
        <div>
          <p className={classes.title}>DEPARTURE DATE</p>

          <div className={classes.dateContainer}>
            <div className={classes.date}>
              <p>{departureDate.getDate()}</p>
            </div>
            <div className={classes.mn_yr}>
              <p>
                {MONTH[departureDate.getMonth()]}, {departureDate.getFullYear()}
              </p>
              <hr />
              <p style={{ fontSize: "18px" }}>
                {WEEKDAY[departureDate.getDay()]}
              </p>
            </div>

            <div>
              <IoIosArrowDown
                className={classes.hover}
                onClick={onDepartureClick}
              />
            </div>
          </div>
          {showDepartureDatePicker && (
            <div className={classes.departureDate}>
              <DatePicker
                selected={arrivalDate}
                onChange={(date) => {
                  setDepartureDate(date);
                  setShowDepartureDatePicker(false);
                }}
                onClickOutside={() => setShowDepartureDatePicker(false)}
              />
            </div>
          )}
        </div>
      </section>
      <section className={classes.s3}>
        <div>
          <p className={classes.title}>ADULTS</p>
          <div className={classes.memberInfo}>
            <p>{adults}</p>
            <div className={classes.settings}>
              <p>
                <IoIosArrowUp
                  className={classes.hover}
                  onClick={() => setAdults(adults + 1)}
                />
              </p>
              <p>
                <IoIosArrowDown
                  className={classes.hover}
                  onClick={() => {
                    if (adults === 1) return;
                    setAdults(adults - 1);
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.s4}>
        <div>
          <p className={classes.title}>CHILDREN</p>
          <div className={classes.memberInfo}>
            <p>{children}</p>
            <div className={classes.settings}>
              <p>
                <IoIosArrowUp
                  className={classes.hover}
                  onClick={() => setChildren(children + 1)}
                />
              </p>
              <p>
                <IoIosArrowDown
                  className={classes.hover}
                  onClick={() => {
                    if (children === 0) return;
                    setChildren(children - 1);
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.s5}>
        <Button style={classes.btn}>CHECK AVAILABILTY</Button>
      </section>
    </div>
  );
};

export default Info;
