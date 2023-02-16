import { Box, Paper } from "@mui/material"
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  img: {
    width: "100%",
    objectFit: "cover",
  }
})

export default function Flag() {
  const classes = useStyles();

  return (
    <Paper>
      <img className={classes.img} alt="flag" src="https://flagcdn.com/mx.svg" />
    </Paper>
  )
}