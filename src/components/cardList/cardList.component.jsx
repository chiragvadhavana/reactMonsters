import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        // console.log(monster.id);
        return <Card key = {monster.id} monster={monster} />;
      })}
    </div>
  );
};
export default CardList;
