import { useContext } from "react";
import CountryContext from "../context/CountryContext";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  img: {
    width: "100%",
    objectFit: "cover",
  }
})

export default function Flag() {
  const { country } = useContext(CountryContext);
  const classes = useStyles();

  if (!country.flag) return <></>

  return <img className={classes.img} alt="flag" src={country.flag} />
}