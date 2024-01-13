import Cards from "./components/cards";
import Carousel from "./components/carousel";
import Catalog from "./components/catalog";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <>
      <Carousel />
      <Cards />

      <Catalog />
      <div style={{ height: 200 }}></div>
    </>
  );
}
