import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./sidebar";
import Typography from "@mui/material/Typography";
import ProductCard from "./product-card";
import ProductList from "./product-list";

export default function Catalog() {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "start" }}>
      <Sidebar />
      <Box sx={{ width: "100%" }}>
        <ProductList subtitle={"Trending Products"} />
        <ProductList subtitle={"Monitors"} />
        <ProductList subtitle={"Mice"} />
        <ProductList subtitle={"Keyboards"} />
        <ProductList subtitle={"Headphones"} />
      </Box>
    </Container>
  );
}
