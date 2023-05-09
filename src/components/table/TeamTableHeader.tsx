import React, { useState } from "react";
import styles from "./Table.module.css";

type Props = {
  handleSortClick: () => void;
};

const TeamTableHeader = ({ handleSortClick }: Props) => {
  const [isAscending, setIsAscending] = useState(true);

  const handleClick = () => {
    handleSortClick();
    setIsAscending((prevState) => !prevState);
  };
  return (
    <tr>
      <th>Logo</th>
      <th>Name</th>
      <th>Field</th>
      <th>
        Community
        <button onClick={handleClick} className={styles.sort_button}>
          {isAscending ? <span>&uarr;</span> : <span>&darr;</span>}
        </button>
      </th>
      <th>Next Session</th>
      <th>State</th>
      <th>Preview</th>
    </tr>
  );
};

export default TeamTableHeader;
