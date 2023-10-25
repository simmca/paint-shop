let productService = {
  allProducts: [
    {
      productId: 1,
      productSku: "PBr7",
      name: "Burnt Umber",
      description: "One ounce bottle of acrylic paint containing PBr7-Burnt Umber",
      price: 5.99,
      imageName: "img/burnt-umber.png",
    },
    {
      productId: 2,
      productSku: "PB36",
      name: "Cobalt Teal",
      description: "One ounce bottle of acrylic paint containing PB36-Cobalt Teal",
      price: 9.99,
      imageName: "img/cobalt_teal.png",
    },
    {
      productId: 3,
      productSku: "PV23",
      name: "Dioxazine Violet",
      description: "One ounce bottle of acrylic paint containing PV23-Dioxazine Violet",
      price: 7.99,
      imageName: "img/dioxazine_violet.png",
    },
    {
      productId: 4,
      productSku: "PBk7",
      name: "Lamp Black",
      description: "One ounce bottle of acrylic paint containing PBk7-Lamp Black",
      price: 5.99,
      imageName: "img/lamp_black.png",
    },
    {
      productId: 5,
      productSku: "PR254",
      name: "Pyrrole Red",
      description: "One ounce bottle of acrylic paint containing PR254-Pyrrole Red",
      price: 9.99,
      imageName: "img/pyrrole_red.png",
    },
    {
      productId: 6,
      productSku: "PY43",
      name: "Raw Sienna",
      description: "One ounce bottle of acrylic paint containing PY43-Raw Sienna",
      price: 5.99,
      imageName: "img/raw_sienna.png",
    },
    {
      productId: 7,
      productSku: "PW6",
      name: "Titanium White",
      description: "One ounce bottle of acrylic paint containing PW6-Titanium White",
      price: 5.99,
      imageName: "img/titanium_white.png",
    },
    {
      productId: 8,
      productSku: "PB29",
      name: "Ultramarine Blue",
      description: "One ounce bottle of acrylic paint containing PB29-Ultramarine Blue",
      price: 5.99,
      imageName: "img/ultramarine_blue.png",
    },
  ],

  getProducts() {
    return this.allProducts;
  },

  getProductByID(id) {
    return this.allProducts[id - 1];
  },

  createNewProduct(product) {
    product.id = this.nextId;
    this.allProducts.push(product);
    this.nextId++;
  },

  searchProducts(searchTerm) {
    return this.allProducts.filter((product) => {
      searchTerm = searchTerm.toUpperCase();
      return (
        product.productSku.toUpperCase().includes(searchTerm) ||
        product.name.toUpperCase().includes(searchTerm) ||
        product.description.toUpperCase().includes(searchTerm)
      );
    });
  },
};
