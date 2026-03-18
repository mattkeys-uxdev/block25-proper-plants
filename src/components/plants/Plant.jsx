const Plant = ({ plant, addToCart }) => {
  return (
    <li className="plant-card">
      {/* <img src={plant.image} alt={plant.name} /> */}
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>

      <button onClick={() => addToCart(plant)}>Add To Cart</button>
    </li>
  );
};

export default Plant;
