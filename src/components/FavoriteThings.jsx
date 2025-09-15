import React from "react";
import styles from "../favorite.module.css";

const FavoriteThings = () => {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);

  const allFavoriteThings = [
    "💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"
  ];

  const thingsElements = myFavoriteThings.map((thing, index) => (
    <p key={index} className={styles.text}>
      {thing}
    </p>
  ));

  function addFavoriteThing() {
    let rand = Math.floor(Math.random() * allFavoriteThings.length);
    setMyFavoriteThings((prev) => [...prev, allFavoriteThings[rand]]);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button className={styles.button} onClick={addFavoriteThing}>
          Add item
        </button>
        <section className={styles.section} aria-live="polite">
          {thingsElements}
        </section>
      </main>
    </div>
  );
};

export default FavoriteThings;
