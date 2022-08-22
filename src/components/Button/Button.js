import classes from "./Button.module.css";
const Button = (props) => {
  const style = `${props.style} ${classes.btn} `;
  return (
    <button className={style} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
