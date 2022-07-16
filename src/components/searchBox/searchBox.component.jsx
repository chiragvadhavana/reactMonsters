import "./search-box.styles.css";

export const SearchBox = ({ onChange, className, placeHolder }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};
    