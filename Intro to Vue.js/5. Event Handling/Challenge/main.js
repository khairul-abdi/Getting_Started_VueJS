const app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green.jpg",
    allText: "A pair of socks",
    inStock: true,
    details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
    variants: [
      { variantId: 2234, variantColor: "green", variantImage: "./assets/vmSocks-green.jpg"},
      { variantId: 2236, variantColor: "blue", variantImage: "./assets/vmSocks-blue.jpg"}
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    subToCart() {
      this.cart -= 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})