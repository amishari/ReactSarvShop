import Card from "./Card/Card";
// import classes from "../components/Card/Card.module.css";
const List = ({ list, product }) => {
  if ({ list }.length === 0) {
    return <h2> Nothing Found! Try again. </h2>;
  }
  return <Card data={product} />;
};

export default List;
