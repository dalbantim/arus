import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

function CardAnggota(props) {
  const { classes, nik, name, handleEdit } = props;

  return (
    <Grid className={classes.card}>
      <Grid container spacing={0} className={classes.cardContainer}>
        <Grid item xs={1} />

        <Grid item xs={5} className={classes.gridLeft}>
          <Typography className={classes.nik}>NIK: {nik}</Typography>

          <Typography onClick={props.click} className={classes.name}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.gridRight}>
          <Typography onClick={handleEdit} className={classes.links}>
            Edit
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withRouter(CardAnggota);
