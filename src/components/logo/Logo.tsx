import React from "react";
import { Team } from "../../types";
import imageDefault from "../../assets/images/default.png";

type Props = {
  team: Team;
};

const Logo = ({ team }: Props) => {
  return (
    <>
      {" "}
      {team?.logo && "data" in team.logo ? (
        <img src={team.logo.data} alt={team.name} width="40" />
      ) : (
        <img src={imageDefault} alt={team.name} width="40" />
      )}
    </>
  );
};

export default Logo;
