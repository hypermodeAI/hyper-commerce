import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Hypermode Commerce",
  description: "An e-commerce app built with Hypermode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-900 text-white my-8 space-y-8">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
