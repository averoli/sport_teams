import React from "react";
import styles from "./SkeletonTable.module.css";

const SkeletonTable = () => {
  const skeletonRows = Array.from({ length: 5 }).map((_, index) => (
    <tr key={index}>
      <td>
        <div className={styles.skeleton} style={{ width: "80%" }}></div>
      </td>
      <td>
        <div className={styles.skeleton} style={{ width: "60%" }}></div>
      </td>
      <td>
        <div className={styles.skeleton} style={{ width: "40%" }}></div>
      </td>
      <td>
        <div className={styles.skeleton} style={{ width: "40%" }}></div>
      </td>
      <td>
        <div className={styles.skeleton} style={{ width: "40%" }}></div>
      </td>
    </tr>
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            <div className={styles.skeleton} style={{ width: "80%" }}></div>
          </th>
          <th>
            <div className={styles.skeleton} style={{ width: "60%" }}></div>
          </th>
          <th>
            <div className={styles.skeleton} style={{ width: "40%" }}></div>
          </th>
          <th>
            <div className={styles.skeleton} style={{ width: "40%" }}></div>
          </th>
          <th>
            <div className={styles.skeleton} style={{ width: "40%" }}></div>
          </th>
        </tr>
      </thead>
      <tbody>{skeletonRows}</tbody>
    </table>
  );
};

export default SkeletonTable;
