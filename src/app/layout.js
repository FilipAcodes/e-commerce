import "./globals.css";

export const metadata = {
  title: "DoggoShop",
  description: "Project for Vanier college final semester 2024",
};

export default function RootLayout({ children }) {
  return (
    <>
      <body>{children}</body>
    </>
  );
}
