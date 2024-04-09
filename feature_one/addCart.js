/* 
    ADD CARD FEATURE
*/
let cart = ["Prod_171"];

const addCart = (...prod) => {
//   cart = [...cart, prod];
  cart.push(...prod);
  return console.log(cart);
}; 

addCart("Prod_172","Prod_173","Prod_179","Prod_175");
