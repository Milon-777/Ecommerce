import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce for gadget shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <CssBaseline />
          <Header />
          <Box component={"main"}>{children}</Box>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
