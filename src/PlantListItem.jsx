export default function PlantListItem({ plant, addToCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      {plant.name}
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
