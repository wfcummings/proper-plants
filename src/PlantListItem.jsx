export default function PlantListItem({ plant }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      {plant.name}
      <button>Add to cart</button>
    </li>
  );
}
