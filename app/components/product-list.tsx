import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import ProductCard from "./product-card";

export default function ProductList({ subtitle }: { subtitle: string }) {
  return (
    <>
      <Typography variant="h4" my={2}>
        {subtitle}
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} sm={4} md={3} lg={2}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={4} md={3} lg={2}>
          <ProductCard />
        </Grid>
      </Grid>
    </>
  );
}
