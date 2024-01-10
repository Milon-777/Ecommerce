import Cards from "./components/cards";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <Cards />
      <div style={{ height: 200 }}></div>
    </>
  );
}
