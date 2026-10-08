import { useState } from "react";
import PlantListItem from "./PlantListItem";
import { PLANTS } from "./data";

export default function PlantList() {
  const [plants] = useState(PLANTS);

  return (
    <section className="plants-list">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <PlantListItem key={plant.id} plant={plant} />
        ))}
      </ul>
    </section>
  );
}
