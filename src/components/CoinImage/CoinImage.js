import React from "react";

import classes from "./CoinImage.css";
import coinImage from "../../assets/coin.jpeg";

const CoinImage = props => (
  <div className={classes.CoinImage}>
    <img src={coinImage} className={classes.CoinImg} />
  </div>
);

export default CoinImage;
