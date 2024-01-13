"use client";

import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import monitorPic from "../../public/monitor.webp";

export default function ProductCard() {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <Card>
      <CardMedia sx={{ p: 2 }}>
        <Box sx={{ maxWidth: 150, m: "auto" }}>
          <Image
            src={monitorPic}
            alt="SVG"
            sizes="100vw"
            priority
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </CardMedia>
      <CardContent sx={{ py: 0 }}>
        <Typography variant="body1" gutterBottom sx={{ color: "#2b3445" }}>
          Product name
        </Typography>
        <Rating name="read-only" value={3} readOnly />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography sx={{ color: "#2b3445", pl: 1, fontWeight: "bold" }}>
          $100
        </Typography>
        <Box>
          <IconButton onClick={() => setIsFavourite(!isFavourite)}>
            {isFavourite ? (
              <FavoriteIcon color="secondary" />
            ) : (
              <FavoriteBorderIcon color="secondary" />
            )}
          </IconButton>
          <IconButton>
            <AddShoppingCartIcon color="secondary" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
