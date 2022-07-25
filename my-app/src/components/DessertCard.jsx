const DessertCard = ({ des }) => {
  return (
    <div>
      <h1>{des.id}</h1>
      <h1>{des.flavor}</h1>
      <h1>{des.topping}</h1>
    </div>
  );
};
