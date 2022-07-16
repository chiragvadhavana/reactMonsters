import "./card.styles.css";

const Card = ({ monster }) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2 className="name">{name}</h2>
      <p className="email">{email}</p>
    </div>
  );
};

export default Card;
