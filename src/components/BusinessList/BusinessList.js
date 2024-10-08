import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

class BusinessList extends React.Component {
  render() {
    return (
      <div className={styles.BusinessList}>
        {this.props.businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
