import { useState } from "react";
import PlantList from "./PlantList";
import CartList from "./CartList";

export default function App() {
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantList />
        <CartList />
      </main>
    </>
  );
}
