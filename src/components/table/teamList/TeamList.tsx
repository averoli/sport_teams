import React, { useState, useEffect } from "react";
import { Team, Logo } from "../../../types";
import TeamTable from "../TeamTable";
import SkeletonTable from "../../skeleton/SkeletonTable";
import styles from "./TeamList.module.css";
import Pagination from "../../pagination/Pagination";

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const convertLogoFormat = (logo: Logo) => {
    switch (logo?.type) {
      case "string":
        return prepareStringImage(logo);
      case "attach":
        return prepareAttachImage(logo);
      default:
        return null;
    }
  };

  const prepareStringImage = (logo: Logo) => {
    const data = logo.data.startsWith("data:")
      ? logo.data
      : `data:${logo.contentType};base64,${logo.data}`;

    return {
      type: "string",
      data: data,
      contentType: logo.contentType,
    };
  };

  const prepareAttachImage = (logo: Logo) => {
    const imageFile = logo.data.substring(logo.data.lastIndexOf("/") + 1);
    const imagePath = require(`../../../assets/images/${imageFile}`);
    return {
      type: "attach",
      data: imagePath,
      contentType: logo.contentType,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/b7169ab627bfe9d850bd"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        const data = json.teams.map((team: Team) => ({
          ...team,
          logo: team.logo ? convertLogoFormat(team.logo) : null,
        }));
        setTeams(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = teams.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <h2>My Teams</h2>
      {loading ? (
        <SkeletonTable />
      ) : (
        <>
          <TeamTable teams={currentItems} setTeams={setTeams} />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={teams.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default TeamList;
