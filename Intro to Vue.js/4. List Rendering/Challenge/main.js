const app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    image: "./assets/socks.jpg",
    allText: "A pair of socks",
    inStock: true,
    details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
    variants: [
      { variantId: 2234, variantColor: "green"},
      { variantId: 2235, variantColor: "black"},
      { variantId: 2236, variantColor: "blue"}
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  }
})