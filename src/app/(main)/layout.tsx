import Header from "../../../components/main/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn - i-invest",
  description: "The knowledge needed to thrive, right at your fingertips | Buy Nigerian stocks, Treasury Bills and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      <body>
        <Header />
        {children}
        <script
          async
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        ></script>
      </body>
    </html>
  );
}
