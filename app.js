// 1. Variables y tipos de datos
let storeName = "TechStore";
const TAX_RATE = 0.19;
let isOpen = true;
let products = [];

// 2. Operadores y estructuras de control
function calculatePrice(basePrice, discount = 0) {
  if (discount > 0 && discount <= 100) {
    const finalPrice = basePrice * (1 - discount / 100);
    return finalPrice * (1 + TAX_RATE);
  }
  return basePrice * (1 + TAX_RATE);
}

calculatePrice(10000, 50);

// 3. Funciones y arrays
function createProduct(name, price, category, stock) {
  // 1. Crear el objeto
  const product = {
    id: Date.now(),
    name: name,
    price: price,
    category: category,
    stock: stock,
    createdAt: new Date(),
  };
  // 2. Retornar el objeto
  return product;
}

// funciones flecha
const removeProduct = (id) => {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    return products.splice(index, 1)[0];
  }
  return null;
};

const filterByCategory = (products, category) => {
  return products.filter((p) => p.category === category);
};

const getLowStock = (products, threshold = 5) => {
  return products.filter((p) => p.stock <= threshold);
};

const calculateTotalValue = (products) => {
  return products.reduce((total, p) => total + p.price * p.stock, 0);
};

// 5. Uso práctico
let newProduct = createProduct("Laptop", 1200, "Electronics", 10);
products.push(newProduct);

newProduct = createProduct("Mouse", 25, "Electronics", 50);
products.push(newProduct);

newProduct = createProduct("Desk", 150, "Furniture", 5);
products.push(newProduct);

console.log(
  "Productos en electrónicos:",
  filterByCategory(products, "Electronics")
);

console.log("Stock bajo:", getLowStock(products, 10));

console.log(
  "Valor total del inventario:",
  calculateTotalValue(products)
);

console.log(products);
