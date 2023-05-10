import React from "react";
import Logo from "../logo/Logo";
import { Team } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import styles from "./Table.module.css";

interface TeamTableHeaderProps {
  team: Team;
  openModal: () => void;
}

const TeamTableRow: React.FC<TeamTableHeaderProps> = ({ team, openModal }) => {
  const stateClass = `state-${team.state}`;

  const handleOpenModal = () => {
    if (team.state === "recorded" || team.state === "recording") {
      openModal();
    }
  };

  return (
    <tr>
      <td>
        <Logo team={team} />
      </td>
      <td>{team.name}</td>
      <td>{team.field}</td>
      <td>{team.community}</td>
      <td>{team.nextSchedule ? team.nextSchedule : "N/A"}</td>
      <td>
        {team.state ? (
          <div className={`${styles[stateClass]}`}>
            {team.state.toUpperCase()}
          </div>
        ) : (
          <div className={styles.nodata}>N/A</div>
        )}
      </td>
      <td>
        {team.isRecorded ? (
          <FontAwesomeIcon
            icon={faEye}
            size="sm"
            style={{ color: "#36bf4d", cursor: "pointer" }}
            onClick={handleOpenModal}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEyeSlash}
            size="sm"
            style={{ color: "#f44366" }}
          />
        )}
      </td>
    </tr>
  );
};

export default TeamTableRow;
