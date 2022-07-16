import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/cardList/cardList.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  return <CardList monsters = {monsters}></CardList>
};

export default App;
