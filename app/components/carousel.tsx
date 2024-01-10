"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../page.css";

import Image from "next/image";
import mousePic from "../../public/mouse.jpg";
import keyboardPic from "../../public/keyboard.avif";
import monitorPic from "../../public/monitor.webp";

export default function Carousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<button class="' + className + '">' + "</button>";
    },
  };

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container sx={{ mb: 8 }}>
        <Swiper
          pagination={pagination}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          style={{ marginTop: "16px" }}>
          <SwiperSlide>
            <Box sx={{ width: "90%" }}>
              <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "start" }}>
                  <Box sx={{ pt: { sm: 2, md: 6 } }}>
                    <Typography
                      sx={{
                        typography: { xs: "h5", sm: "h4", lg: "h3" },
                        fontWeight: {
                          xs: "bold",
                          sm: "bold",
                          md: "bold",
                          lg: "bold",
                        },
                        mb: 2,
                        color: "#2b3445",
                      }}>
                      Crisp Visuals, Limitless Horizons
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#113661", mb: 3 }}>
                      Immerse yourself in stunning visuals with our premium
                      monitors.
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      endIcon={<ShoppingCartIcon />}>
                      Shop Now
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box>
                    <Image
                      src={monitorPic}
                      alt="SVG"
                      sizes="100vw"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={{ width: "90%" }}>
              <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "start" }}>
                  <Box sx={{ pt: { sm: 2, md: 6 } }}>
                    <Typography
                      sx={{
                        typography: { xs: "h5", sm: "h4", lg: "h3" },
                        fontWeight: {
                          xs: "bold",
                          sm: "bold",
                          md: "bold",
                          lg: "bold",
                        },
                        mb: 2,
                        color: "#2b3445",
                      }}>
                      Precision in Your Palm
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#113661", mb: 3 }}>
                      Explore our collection of high-performance mice.
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      endIcon={<ShoppingCartIcon />}>
                      Shop Now
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box>
                    <Image
                      src={mousePic}
                      alt="SVG"
                      sizes="100vw"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={{ width: "90%" }}>
              <Grid container spacing={3} sx={{ mt: 0 }}>
                <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "start" }}>
                  <Box sx={{ pt: { sm: 2, md: 6 } }}>
                    <Typography
                      sx={{
                        typography: { xs: "h5", sm: "h4", lg: "h3" },
                        fontWeight: {
                          xs: "bold",
                          sm: "bold",
                          md: "bold",
                          lg: "bold",
                        },
                        mb: 2,
                        color: "#2b3445",
                      }}>
                      Type in Style
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#113661", mb: 3 }}>
                      Discover our range of sophisticated keyboards.
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      endIcon={<ShoppingCartIcon />}>
                      Shop Now
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box>
                    <Image
                      src={keyboardPic}
                      alt="SVG"
                      sizes="100vw"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}
