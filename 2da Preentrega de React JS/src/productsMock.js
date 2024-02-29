export let products = [
  {
    id: 1,
    title: "Berenjenas",
    price: 2700,
    description: "las mejores del condado",
    img: "",
    stock: 12,
    category: "Almacen",
  },
  {
    id: 2,
    title: "Chucrut",
    price: 6500,
    stock: 7,
    description: "Lo segundo mas rico del condado",
    category: "Almacen",
    img: "",
  },
  {
    id: 3,
    title: "Aceitunas",
    price: 5000,
    stock: 10,
    description: "Lo tercero mas rico del condado",
    category: "Almacen",
    img: "",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      reject("No hay productos disponibles");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se obtiene el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos disponibles");
    }
  });
};
