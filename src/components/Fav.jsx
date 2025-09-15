import React from 'react';

import starFilled from "@/images/filled-star.png";
import starEmpty from "@/images/empty-star.jpg";
import styles from "../profile.module.css"; // ✅ import CSS module


const Fav = (prop) => {
    console.log("Props: ",prop);


    let starIcon = prop.isFavorite ? starFilled : starEmpty



    
  return (
    <button
    onClick={prop.toggleFav}
    aria-pressed={prop.isFavorite}
    className={styles["favorite-button"]}
>
    <img
        src={starIcon}
        alt={prop.isFavorite ? "filled star icon" : "empty star icon"}
        className={styles.favorite}
    />
</button>
  );
};

export default Fav;