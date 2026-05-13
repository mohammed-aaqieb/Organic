import fruitsImg from "../../assets/fruits/apple.jpg";
import vegImg from "../../assets/vegetables/tomato.jpg";

const FeaturedCategories = () => {
  return (
    <section className="bg-[#F8FFF4] py-24 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-16">

        <p className="text-green-600 font-semibold tracking-widest uppercase">
          Categories
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
          Explore Organic Foods
        </h2>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          Fresh fruits and vegetables directly from healthy organic farms.
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Fruits Card */}
        <div className="group relative overflow-hidden rounded-[40px] bg-white shadow-xl hover:shadow-2xl transition duration-500">

          <div className="absolute inset-0 bg-gradient-to-r from-green-700/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <img
            src={fruitsImg}
            alt="Fruits"
            className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute bottom-0 left-0 p-10 text-white">

            <h3 className="text-4xl font-bold">
              Fresh Fruits
            </h3>

            <button className="mt-5 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition duration-300">
              Shop Fruits
            </button>

          </div>

        </div>

        {/* Vegetables Card */}
        <div className="group relative overflow-hidden rounded-[40px] bg-white shadow-xl hover:shadow-2xl transition duration-500">

          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

          <img
            src={vegImg}
            alt="Vegetables"
            className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute bottom-0 left-0 p-10 text-white">

            <h3 className="text-4xl font-bold">
              Organic Vegetables
            </h3>

            <button className="mt-5 bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-full transition duration-300">
              Shop Vegetables
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeaturedCategories;