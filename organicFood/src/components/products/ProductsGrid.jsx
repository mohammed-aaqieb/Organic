import products from "../../data/products";

import ProductCard from "./ProductCard";

const ProductsGrid = ({ search, category }) => {

  const filteredProducts = products.filter((item) => {

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative bg-[#F8FFF4] py-24 px-6 md:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">

          <div>

            <p className="uppercase tracking-[5px] text-green-600 font-semibold">
              Organic Products
            </p>

            <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
              Fresh Foods Collection
            </h2>

          </div>

          {/* Count */}
          <div className="bg-white px-6 py-4 rounded-full shadow-lg text-gray-700 font-semibold">

            {filteredProducts.length} Products Found

          </div>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">

          {filteredProducts.map((item) => (

            <ProductCard
              key={item.id}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductsGrid;