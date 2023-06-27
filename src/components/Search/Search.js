import classes from "./Search.module.css";
const Search = ({ search, onSearch }) => {
  return (
    <>
      <div className={classes.search}>
        <input
          type="text"
          className={classes.searchTerm}
          placeholder="بخشی از نام محصول یا مدل آن و یا کد محصول را بنویسید"
          onChange={onSearch}
        />
        <button className={classes.btn}>جستجو</button>
      </div>
    </>
  );
};
export default Search;
