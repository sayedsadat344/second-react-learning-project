import React from "react";
import styles from "../profile.module.css"; // ✅ import CSS module

import avatar from "@/images/avatar.png";

import Fav from "./Fav";

const Profile = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false,
    });

    function toggleFavorite() {


        setContact((prev) => {
            return {
                ...prev,
                isFavorite: !prev.isFavorite
            } 
        });

    }


  



    return (
        <main className={styles.main}>
            <article className={styles.card}>
                <img
                    src={avatar}
                    className={styles.avatar}
                    alt={`User profile picture of ${contact.firstName} ${contact.lastName}`}
                />
                <div className={styles.info}>
                  <Fav isFavorite ={contact.isFavorite} toggleFav={toggleFavorite} />
                    <h2 className={styles.name}>
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className={styles.contact}>{contact.phone}</p>
                    <p className={styles.contact}>{contact.email}</p>
                </div>
            </article>
        </main>
    );
};

export default Profile;
