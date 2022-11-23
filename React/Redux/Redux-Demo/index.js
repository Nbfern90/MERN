const CAKE_ORDERED = "CAKE_ORDERED";

//Action in an object with a "type" property
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};
