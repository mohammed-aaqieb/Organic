import { useState } from "react";

import Navbar from "../components/common/Navbar";
import ProductsHero from "../components/products/ProductsHero";
import FilterBar from "../components/products/FilterBar";

import ProductsGrid from "../components/products/ProductsGrid";
import Footer from "../components/common/Footer";
const Products = () => {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  return (
    <>
      <Navbar />

      <ProductsHero />

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <ProductsGrid search={search} category={category} />
      <Footer />
    </>
  );
};

export default Products;
