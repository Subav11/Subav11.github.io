//shopping cart
let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

const showProducts = () => {
  let str = "<div class='row'>";
  products.map((value) => {
    str += `<div>
    <h3>${value.name}</h3>
    <h4>$${value.price}</h4>
    <button onclick="addToCart(${value.id})">Add to Cart</button>
    </div>`;
  });
  str += "</div>"
  let root = document.getElementById("root"); 
  root.innerHTML = str;
}
const showCart = () => {
  let str = "";
products.map(value=>{
    cart[value.id] >0 && (str += `<li>
      ${value.name}- ${value.price}-
      <button onclick="decrement(${value.id})">-</button> 
      ${cart[value.id]}
      <button onclick="increment(${value.id})">+</button>- ${value.price*cart[value.id]}
      </li>`)
});
str += "<h4 id='orderValue'></h4>"
  let root = document.getElementById("root");
  root.innerHTML = str;
  showOrderValue();
}
const showCount = () => {
  document.getElementById("cartCount").innerHTML = Object.keys(cart).length;
} 

function addToCart(id) {
  cart = { ...cart, [id]: 1 };
  showCount();

}
function increment(id) {
  cart = { ...cart, [id]: cart[id] + 1 };
  showCart();
  showCount();
}
function decrement(id) {
  cart = { ...cart, [id]: cart[id] - 1 };
  showCart();
  showCount();
}

const showOrderValue = () => {
const total = products.reduce((sum,value)=> {
    return sum + value.price*(cart[value.id]??0)
},0)
document.getElementById("orderValue").innerHTML = `Order Value: ${total}`;
}
