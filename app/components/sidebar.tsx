"use client";

import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MonitorIcon from "@mui/icons-material/Monitor";
import MouseIcon from "@mui/icons-material/Mouse";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { NumericFormat } from "react-number-format";

export default function Sidebar() {
  return (
    <Box
      sx={{
        mr: 3,
        display: { xs: "none", sm: "block" },
        width: 200,
      }}>
      <Box sx={{ width: "100%", position: "sticky", top: 50 }}>
        <List
          sx={{
            bgcolor: "white",
          }}
          component="div"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ color: "#2b3445", py: 1 }}>
              <Typography variant="h6" color={"#2b3445"}>
                Price
              </Typography>
            </ListSubheader>
          }>
          <Divider />
          <NumericFormat
            prefix="$"
            thousandSeparator
            customInput={TextField}
            label="From"
            variant="outlined"
            color="secondary"
            sx={{ m: 2, mb: 0 }}
          />
          <NumericFormat
            prefix="$"
            thousandSeparator
            customInput={TextField}
            label="To"
            variant="outlined"
            color="secondary"
            sx={{ m: 2, mb: 0 }}
          />
        </List>

        <List
          sx={{
            bgcolor: "white",
          }}
          component="div"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ color: "#2b3445", py: 1 }}>
              <Typography variant="h6" color={"#2b3445"}>
                Categories
              </Typography>
            </ListSubheader>
          }>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Monitors"
              primaryTypographyProps={{ color: "#2e3748" }}
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Mice"
              primaryTypographyProps={{ color: "#2e3748" }}
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Keyboards"
              primaryTypographyProps={{ color: "#2e3748" }}
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Headphones"
              primaryTypographyProps={{ color: "#2e3748" }}
            />
          </ListItemButton>
        </List>

        <List
          sx={{
            bgcolor: "white",
          }}
          component="div"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ color: "#2b3445", py: 1 }}>
              <Typography variant="h6" color={"#2b3445"}>
                Brands
              </Typography>
            </ListSubheader>
          }>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Samsung"
              primaryTypographyProps={{ color: "#2e3748" }}
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Logitech"
              primaryTypographyProps={{ color: "#2e3748" }}
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Asus"
              primaryTypographyProps={{ color: "#2e3748" }}
            />
          </ListItemButton>

          <ListItemButton>
            <ListItemText
              primary="Acer"
              primaryTypographyProps={{ color: "#2e3748" }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}
