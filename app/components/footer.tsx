import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222935",
        color: "white",
      }}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", px: 3, py: 6 }}>
          <Grid xs={12} sm={6}>
            <Box sx={{ display: "flex" }}>
              <DevicesOtherIcon sx={{ typography: { sm: "h4" }, mr: 1 }} />

              <Typography
                sx={{ typography: { xs: "h6", sm: "h5" } }}
                gutterBottom
                noWrap>
                Gadget Shop
              </Typography>
            </Box>

            <Typography variant="body2" color="lightgray">
              Embrace the ever-evolving world of technology with our Gadget
              Shop. Every day is a new adventure, immerse yourself in innovative
              solutions, and give your life an instant upgrade!
            </Typography>
          </Grid>

          <Grid xs={12} sm={6}>
            <Typography variant="h6" gutterBottom fontWeight={"fontWeightBold"}>
              About Us
            </Typography>
            <Typography gutterBottom>
              <Link
                href="/"
                variant="body2"
                color="lightgray"
                underline="hover">
                Careers
              </Link>
            </Typography>
            <Typography gutterBottom>
              <Link
                href="/"
                variant="body2"
                color="lightgray"
                underline="hover">
                Our Cares
              </Link>
            </Typography>
            <Typography gutterBottom>
              <Link
                href="/"
                variant="body2"
                color="lightgray"
                underline="hover">
                Terms & Conditions
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                gutterBottom
                variant="body2"
                color="lightgray"
                underline="hover">
                Our Cares
              </Link>
            </Typography>
          </Grid>

          <Grid xs={12} sm={6}>
            <Typography variant="h6" gutterBottom fontWeight={"fontWeightBold"}>
              Customer Care
            </Typography>
            <Typography gutterBottom>
              <Link
                href="/"
                variant="body2"
                color="lightgray"
                underline="hover">
                Help Center
              </Link>
            </Typography>
            <Typography gutterBottom>
              <Link
                href="/"
                variant="body2"
                color="lightgray"
                underline="hover">
                Track Your Order
              </Link>
            </Typography>
            <Typography gutterBottom>
              <Link
                href="/"
                variant="body2"
                color="lightgray"
                underline="hover">
                Corporate & Bulk Purchasing
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                gutterBottom
                variant="body2"
                color="lightgray"
                underline="hover">
                Returns & Refunds
              </Link>
            </Typography>
          </Grid>

          <Grid xs={12} sm={6}>
            <Typography variant="h6" fontWeight={"fontWeightBold"} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" py={0.5} color="lightgray" gutterBottom>
              70 Washington Square South, New York, NY 10012, United States
            </Typography>
            <Typography variant="body2" py={0.5} color="lightgray" gutterBottom>
              Email: gadgetShop.no-reply@gmail.com
            </Typography>
            <Typography variant="body2" py={0.5} color="lightgray" gutterBottom>
              Phone: +1 2345 678 910
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
