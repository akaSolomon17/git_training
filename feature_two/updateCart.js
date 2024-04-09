/* 
    UPDATE CARD FEATURE
*/
let cart = ["Prod_171"];

const updateCart = (...prod) => {
  cart = [];
  cart.push(...prod);
  return console.log(cart);
};

updateCart("Prod_172", "Prod_173", "Prod_179", "Prod_175");
