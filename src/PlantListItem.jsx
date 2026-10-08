export default function PlantListItem({ plant }) {
  return (
    <li>
      {plant.image}
      {plant.name}
      <button>Add to cart</button>
    </li>
  );
}
