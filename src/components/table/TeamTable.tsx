import React, { useState } from "react";
import Modal from "../modal/Modal";
import TeamTableHeader from "./TeamTableHeader";
import TeamTableRow from "./TeamTableRow";
import { Team } from "../../types";
import styles from "./Table.module.css";

type Props = {
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
};

const TeamTable: React.FC<Props> = ({ teams, setTeams }) => {
  const [activeTeamIndex, setActiveTeamIndex] = useState(-1);
  const [sortedList, setSortedList] = useState("ASC");

  const openModal = (index: number) => {
    setActiveTeamIndex(index);
  };

  const closeModal = () => {
    setActiveTeamIndex(-1);
  };

  const handleSortClick = () => {
    if (sortedList === "ASC") {
      const sortedList = [...teams].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setTeams(sortedList);
      setSortedList("DSC");
    }
    if (sortedList === "DSC") {
      const sortedList = [...teams].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setTeams(sortedList);
      setSortedList("ASC");
    }
  };

  const teamRows = teams.map((team, index) => (
    <TeamTableRow key={index} team={team} openModal={() => openModal(index)} />
  ));

  const modal = activeTeamIndex >= 0 && (
    <Modal
      modalIsOpen={true}
      onRequestClose={closeModal}
      key={teams[activeTeamIndex].key}
    >
      {teams[activeTeamIndex].name}
    </Modal>
  );

  return (
    <>
      <table className={styles.table}>
        <thead>
          <TeamTableHeader handleSortClick={handleSortClick} />
        </thead>
        <tbody>{teamRows}</tbody>
      </table>
      {modal}
    </>
  );
};

export default TeamTable;
