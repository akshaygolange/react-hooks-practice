// Imagine an e-commerce page where a user can type a search query to filter a massive list of products, and there's also a separate "Toggle Theme" button on the page.

import React, { useEffect, useMemo, useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const UseMemoDemo = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { theme, toggleTheme } = useContext(ThemeContext);
  const fetchProductsData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);

      const { products } = await response.json();
      console.log(`Products ->`, products);
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  //   with useMemo
  const filteredProducts = useMemo(() => {
    console.log("filtering products...");

    const filterd = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    console.log("filtered ->>>", filterd);

    return filterd;
  }, [searchTerm, products]);

  // without useMemo

    // console.log("filtering products...");
    // const filteredProducts = products.filter((product) =>
    //   product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    // );

    // console.log("filterd ->>>", filteredProducts);

  useEffect(() => {
    fetchProductsData();
  }, []);
  return (
    <div>
      <h2>
        {theme === "light"
          ? "☀️ Good Morning, User!"
          : "🌙 Burning the Midnight Oil?"}
      </h2>{" "}
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
      <input
        style={{
          padding: "8px",
          width: "300px",
          margin: "8px",
          display: "block",
          marginBottom: "20px",
          fontSize: "25px",
        }}
        type="text"
        placeholder="Search products by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h4>Products ({filteredProducts.length})</h4>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h4> {product.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoDemo;
