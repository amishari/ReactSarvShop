import Card from "../components/Card/Card";
const List = ({ list }) => {
  if ({ list }.length === 0) {
    return <h2> Nothing Found! Try again. </h2>;
  }
  return <Card data={list} />;
};

export default List;
