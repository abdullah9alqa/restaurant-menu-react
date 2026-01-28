import { Container } from "react-bootstrap";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
function App() {
  const [itemsData, setItemsData] = useState(items);

  //get all cat uniqe
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];

  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  //filter by search form
  //filter by search form
  const filterbySearch = (word) => {
    const searchWord = word.trim().toLowerCase();

    if (searchWord === "") {
      setItemsData(items); // لو فاضي رجّع الكل
      return;
    }

    const newArr = items.filter((item) =>
      item.title.toLowerCase().includes(searchWord),
    );

    setItemsData(newArr);
  };

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Category
          filterbyCategory={filterbyCategory}
          allCategory={allCategory}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
