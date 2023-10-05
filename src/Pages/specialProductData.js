import SBlog from "../assets/images/jbl.webp";
import Perfume from "../assets/images/perfume.webp";
import SanDisk from "../assets/images/sandisk.webp";
import noodles from '../assets/images/noodles.webp';

const specialProductData = [
  {
    id: 1,
    title: "SanDisk Extreme SSD - 4TB - Up To 1050mb/s",
    image: SanDisk,
    brand: "SanDisk",
    price: 372960,
    link: "/",
  },
  {
    id: 2,
    title: "JBL Live 660nc Wireless Headset- Blue",
    image: SBlog,
    brand: "JBL",
    price: 122150,
    link: "/contact",
  },
  {
    id: 3,
    title: "Pure Bloom Perfume Spray -100ml",
    image: Perfume,
    brand: "Bloom",
    price: 900,
    link: "/about",
  },
  {
    id: 4,
    title: "Indomie Regular Chicken 70g X 40 (1 Carton)",
    image: noodles,
    brand: "Indomie",
    price: 4750,
    link: "/blog",
  },
];

export default specialProductData;
