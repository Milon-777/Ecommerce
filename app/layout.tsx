import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

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
          <ScopedCssBaseline>
            <Header />
            <main>{children}</main>
            <footer>FOOTER</footer>
          </ScopedCssBaseline>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
