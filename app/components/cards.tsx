import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Cards() {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        textAlign={"center"}
        alignItems={"center"}
        sx={{ width: "inherit", ml: 0 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundColor: "gray",
            padding: 0,
          }}
          style={{ padding: 0 }}>
          <Box mr={1}>
            <RocketLaunchIcon fontSize="large" />
          </Box>
          <Box>
            <Typography variant="h6">Fast Delivery</Typography>
            <Typography variant="body1">Start from $10</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
