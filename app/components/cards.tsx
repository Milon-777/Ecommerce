import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SavingsIcon from "@mui/icons-material/Savings";
import AlarmIcon from "@mui/icons-material/Alarm";
import PaymentIcon from "@mui/icons-material/Payment";

export default function Cards() {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        sx={{ textAlign: "center", alignItems: "center" }}>
        <Grid xs={12} sm={6} md={3}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}>
            <Box sx={{ mr: 1 }}>
              <RocketLaunchIcon fontSize="large" sx={{ color: "#2e3748" }} />
            </Box>
            <Box>
              <Typography variant="h6" color={"#2b3445"}>
                Fast Delivery
              </Typography>
              <Typography variant="body1" color={"#7d879c"}>
                Start from $10
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}>
            <Box sx={{ mr: 1 }}>
              <SavingsIcon fontSize="large" sx={{ color: "#2e3748" }} />
            </Box>
            <Box>
              <Typography variant="h6" color={"#2b3445"}>
                Money Guarantee
              </Typography>
              <Typography variant="body1" color={"#7d879c"}>
                7 Days Back
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}>
            <Box sx={{ mr: 1 }}>
              <AlarmIcon fontSize="large" sx={{ color: "#2e3748" }} />
            </Box>
            <Box>
              <Typography variant="h6" color={"#2b3445"}>
                365 Days
              </Typography>
              <Typography variant="body1" color={"#7d879c"}>
                For free return
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}>
            <Box sx={{ mr: 1 }}>
              <PaymentIcon fontSize="large" sx={{ color: "#2e3748" }} />
            </Box>
            <Box>
              <Typography variant="h6" color={"#2b3445"}>
                Payment
              </Typography>
              <Typography variant="body1" color={"#7d879c"}>
                Secure system
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
