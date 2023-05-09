import React from "react";
import TeamList from "./components/table/teamList/TeamList";
import NavBar from "./components/navBar/NavBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <TeamList />
    </div>
  );
}

export default App;
