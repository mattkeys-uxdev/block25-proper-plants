import Plant from "./plant";

const Plants = ({ plants, addToCart }) => {
  return (
    <div className="plants-container">
      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
};
export default Plants;
