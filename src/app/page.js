"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Welcome to DoggoShop</h1>
      <HomePage />
      <Footer />
    </main>
  );
}
