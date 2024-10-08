import React from "react";
import styles from "./Business.module.css";

class Business extends React.Component {
  render() {
    const {
      imageSrc,
      name,
      address,
      city,
      state,
      zipCode,
      category,
      rating,
      reviewCount,
    } = this.props.business;

    return (
      <div className={styles.Business}>
        <div className={styles["image-container"]}>
          <img src={imageSrc} alt={name} />
        </div>
        <h2>{name}</h2>
        <div className={styles["Business-information"]}>
          <div className={styles["Business-address"]}>
            <p>{address}</p>
            <p>{city}</p>
            <p>{`${state} ${zipCode}`}</p>
          </div>
          <div className={styles["Business-reviews"]}>
            <h3>{category}</h3>
            <h3 className={styles.rating}>{`${rating} stars`}</h3>
            <p>{`${reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
