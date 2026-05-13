import apple from "../assets/fruits/apple.jpg";
import banana from "../assets/fruits/banana.jpg";
import tomato from "../assets/vegetables/tomato.jpg";
import carrot from "../assets/vegetables/carrot.jpg";
import pineapple from "../assets/fruits/pineapple2.jpg";

const products = [
  {
    id: 1,
    name: "Organic Apple",
    price: 120,
    image: apple,
    category: "fruit",
  },
  {
    id: 2,
    name: "Fresh Banana",
    price: 80,
    image: banana,
    category: "fruit",
  },
  {
    id: 3,
    name: "Organic Tomato",
    price: 70,
    image: tomato,
    category: "vegetable",
  },
  {
    id: 4,
    name: "Fresh Carrot",
    price: 90,
    image: carrot,
    category: "vegetable",
  },
  {
    id: 5,
    name: "Fresh Pineapple",
    price: 80,
    image: pineapple,
    category: "fruit",
  },
];

export default products;