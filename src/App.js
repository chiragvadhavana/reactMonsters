//12:30 1:40
import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/cardList/cardList.component";
import { SearchBox } from "./components/searchBox/searchBox.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
    console.log(filteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) =>
    setSearchField(event.target.value.toLowerCase());

  // const onStringChange = (event) =>
  //   setSearchString(event.target.value.toLowerCase());

  return (
    <div>
      <SearchBox
        onChange={onSearchChange}
        placeHolder="Search Monsters"
        className="monster-search-box"
      />
      {/* <SearchBox
        onChange={onStringChange}
        placeHolder="Other Search "
        className="other-search-box"
      /> */}
      <CardList monsters={filteredMonsters}></CardList>)
    </div>
  );
};

export default App;
