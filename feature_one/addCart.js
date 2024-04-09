/* 
    ADD CARD FEATURE
    hotfix done here
    font style edited
    BUG FIXED!!!
*/
let cart = ["Prod_171"];

const addCart = (...prod) => {
  //   cart = [...cart, prod];
  cart.push(...prod);
  return cart;
};

addCart("Prod_172", "Prod_173", "Prod_179", "Prod_175");
