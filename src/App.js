import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Product from "./asset/jsonData/data.json";
import "./styles.css";
import "./asset/fonts/Vazirmatn-Regular.ttf";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedItems = Product.filter((item) => {
    return (
      item.Product_name.includes(searchTerm) ||
      [item.code].toString().includes(searchTerm)
    );
  });

  return (
    <div className="App">
      <Header />
      <Search search={searchTerm} onSearch={handleSearch} />
      <Card list={searchedItems} />
    </div>
  );
}
